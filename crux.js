const svg = d3.select("svg");

// Define the gray arrow marker
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

// Define the pink arrow marker
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
   .attr("fill", "#ef5ba1");             // Pink color

// Draw the gender-neutral person icon
// Head (circle)
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

// Label underneath the icon
svg.append("text")
   .attr("x", 100)
   .attr("y", 190)
   .attr("fill", "#777")
   .attr("font-size", "14px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("text-anchor", "middle")
   .text("Untrusted origin");

// Draw the component box on the right side
svg.append("rect")
   .attr("x", 500)
   .attr("y", 100)
   .attr("width", 150)
   .attr("height", 60)
   .attr("fill", "#777");

// Add label inside the box on the right side
svg.append("text")
   .attr("x", 575)
   .attr("y", 135)
   .attr("fill", "#fff")
   .attr("font-size", "14px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("text-anchor", "middle")
   .text("Protected component");

// Draw the horizontal line with an arrow between the icon and the box
const line = svg.append("line")
   .attr("x1", 130)                   // End of the icon
   .attr("y1", 130)
   .attr("x2", 500)                   // Start of the box
   .attr("y2", 130)
   .attr("stroke", "#777")
   .attr("stroke-width", 4)
   .attr("marker-end", "url(#arrow-gray)") // Start with gray arrowhead
   .style("cursor", "pointer")
   .on("mouseover", function() {      // Add hover effect for color and sticky note
      d3.select(this)
        .attr("stroke", "#ef5ba1")    // Change line color to pink
        .attr("marker-end", "url(#arrow-pink)");  // Change arrowhead to pink
      stickieRect.style("opacity", 1);   // Show the stickie note
      stickieText1.style("opacity", 1);  // Show the stickie note text line 1
      stickieText2.style("opacity", 1);  // Show the stickie note text line 2
   })
   .on("mouseout", function() {       // Reset on mouseout
      d3.select(this)
        .attr("stroke", "#777")       // Reset line color
        .attr("marker-end", "url(#arrow-gray)"); // Reset arrowhead to gray
      stickieRect.style("opacity", 0);      // Hide the stickie note
      stickieText1.style("opacity", 0);     // Hide the stickie note text line 1
      stickieText2.style("opacity", 0);     // Hide the stickie note text line 2
   });

// Add invisible "stickie note" square above the line
const stickieRect = svg.append("rect")
   .attr("x", 300)
   .attr("y", 40)
   .attr("width", 60)
   .attr("height", 60)
   .attr("fill", "yellow")
   .style("opacity", 0);  // Initially invisible

// Add first line of text inside the "stickie note" square
const stickieText1 = svg.append("text")
   .attr("x", 330)
   .attr("y", 60)
   .attr("fill", "#333")
   .attr("font-size", "10px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("text-anchor", "middle")
   .text("What can go")
   .style("opacity", 0);  // Initially invisible

// Add second line of text inside the "stickie note" square
const stickieText2 = svg.append("text")
   .attr("x", 330)
   .attr("y", 75)
   .attr("fill", "#333")
   .attr("font-size", "10px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("text-anchor", "middle")
   .text("wrong here?")
   .style("opacity", 0);  // Initially invisible

// Add subtle microcopy with eye icon below the diagram
svg.append("text")
   .attr("x", 325)
   .attr("y", 280)
   .attr("fill", "#888")
   .attr("font-size", "10px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("text-anchor", "middle")
   .text("👁️ Hover over elements to explore potential risks");
