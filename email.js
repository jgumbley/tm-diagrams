const svg = d3.select("svg");

// Define the gray arrow marker for default state
svg.append("defs").append("marker")
   .attr("id", "arrow-gray")
   .attr("viewBox", "0 0 10 10")
   .attr("refX", 9)
   .attr("refY", 5)
   .attr("markerWidth", 6)
   .attr("markerHeight", 6)
   .attr("orient", "auto")
   .append("path")
   .attr("d", "M 0 0 L 10 5 L 0 10 Z")  // Triangle shape for arrowhead
   .attr("fill", "#777");               // Gray color

// Define the pink arrow marker for hover state
svg.append("defs").append("marker")
   .attr("id", "arrow-pink")
   .attr("viewBox", "0 0 10 10")
   .attr("refX", 9)
   .attr("refY", 5)
   .attr("markerWidth", 6)
   .attr("markerHeight", 6)
   .attr("orient", "auto")
   .append("path")
   .attr("d", "M 0 0 L 10 5 L 0 10 Z")  // Triangle shape for arrowhead
   .attr("fill", "#ef5ba1");             // Pink color for hover

// Draw the untrusted source icon (external party)
svg.append("circle")
   .attr("cx", 100)
   .attr("cy", 110)
   .attr("r", 15)
   .attr("fill", "#777");

// Body (semicircle with flat side to the right)
svg.append("path")
   .attr("d", d3.arc()
      .innerRadius(0)
      .outerRadius(30)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2)
   )
   .attr("transform", "translate(100, 150)")
   .attr("fill", "#777");

// Label underneath the untrusted source icon
svg.append("text")
   .attr("x", 100)
   .attr("y", 190)
   .attr("fill", "#777")
   .attr("font-size", "14px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("text-anchor", "middle")
   .text("External Sender");

// Draw the protected target component (staff)
svg.append("rect")
   .attr("x", 500)
   .attr("y", 100)
   .attr("width", 150)
   .attr("height", 60)
   .attr("fill", "#777");

// Add label inside the protected component box
svg.append("text")
   .attr("x", 575)
   .attr("y", 135)
   .attr("fill", "#fff")
   .attr("font-size", "14px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("text-anchor", "middle")
   .text("Staff (Protected)");

// Draw the data flow line with arrow, representing the API endpoint
const line = svg.append("line")
   .attr("x1", 130)
   .attr("y1", 130)
   .attr("x2", 500)
   .attr("y2", 130)
   .attr("stroke", "#777")
   .attr("stroke-width", 4)
   .attr("marker-end", "url(#arrow-gray)")
   .style("cursor", "pointer")
   .on("mouseover", function() {
      d3.select(this)
        .attr("stroke", "#ef5ba1")
        .attr("marker-end", "url(#arrow-pink)"); // Change line and arrowhead to pink
      stickieRect1.style("opacity", 1);   // Show phishing threat stickie
      stickieText1a.style("opacity", 1);  
      stickieText1b.style("opacity", 1);  
      stickieRect2.style("opacity", 1);   // Show interception threat stickie
      stickieText2a.style("opacity", 1);
      stickieText2b.style("opacity", 1);
   })
   .on("mouseout", function() {
      d3.select(this)
        .attr("stroke", "#777")
        .attr("marker-end", "url(#arrow-gray)"); // Reset line and arrowhead to gray
      stickieRect1.style("opacity", 0);   // Hide phishing threat stickie
      stickieText1a.style("opacity", 0);  
      stickieText1b.style("opacity", 0);  
      stickieRect2.style("opacity", 0);   // Hide interception threat stickie
      stickieText2a.style("opacity", 0);
      stickieText2b.style("opacity", 0);
   });

// Add "Phishing" stickie note above the line
const stickieRect1 = svg.append("rect")
   .attr("x", 300)
   .attr("y", 50) 
   .attr("width", 80)
   .attr("height", 40)
   .attr("fill", "yellow")
   .style("opacity", 0);

const stickieText1a = svg.append("text")
   .attr("x", 340)
   .attr("y", 65)
   .attr("fill", "#333")
   .attr("font-size", "10px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("text-anchor", "middle")
   .text("Phishing")
   .style("opacity", 0);

const stickieText1b = svg.append("text")
   .attr("x", 340)
   .attr("y", 80)
   .attr("fill", "#333")
   .attr("font-size", "10px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("text-anchor", "middle")
   .text("with links")
   .style("opacity", 0);

// Add "Interception" stickie note above the line
const stickieRect2 = svg.append("rect")
   .attr("x", 400)
   .attr("y", 50)
   .attr("width", 100)
   .attr("height", 40)
   .attr("fill", "yellow")
   .style("opacity", 0);

const stickieText2a = svg.append("text")
   .attr("x", 450)
   .attr("y", 65)
   .attr("fill", "#333")
   .attr("font-size", "10px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("text-anchor", "middle")
   .text("Message")
   .style("opacity", 0);

const stickieText2b = svg.append("text")
   .attr("x", 450)
   .attr("y", 80)
   .attr("fill", "#333")
   .attr("font-size", "10px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("text-anchor", "middle")
   .text("Interception")
   .style("opacity", 0);

// Add subtle microcopy with eye icon below the diagram
svg.append("text")
   .attr("x", 325)
   .attr("y", 280)
   .attr("fill", "#888")
   .attr("font-size", "10px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("text-anchor", "middle")
   .text("👁️ Hover over the arrow to explore potential risks");
