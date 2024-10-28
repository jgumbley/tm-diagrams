const svg = d3.select("svg");

// Define the arrow marker
svg.append("defs").append("marker")
   .attr("id", "arrow")
   .attr("viewBox", "0 0 10 10")
   .attr("refX", 9)
   .attr("refY", 5)
   .attr("markerWidth", 6)
   .attr("markerHeight", 6)
   .attr("orient", "auto")
   .append("path")
   .attr("d", "M 0 0 L 10 5 L 0 10 Z")  // Triangle shape for arrowhead
   .attr("fill", "#777");               // Color of arrowhead

// Draw the gender-neutral person icon
// Head (circle)
svg.append("circle")
   .attr("cx", 125)                    // X position of the head
   .attr("cy", 110)                    // Y position of the head
   .attr("r", 15)                      // Radius of the head
   .attr("fill", "#777");              // Color of the head

// Body (semicircle with flat side to the right)
svg.append("path")
   .attr("d", d3.arc()                 // Define the semicircle path
      .innerRadius(0)                  // Solid shape (no inner radius)
      .outerRadius(30)                 // Radius of the semicircle
      .startAngle(-Math.PI / 2)        // Start at -90 degrees
      .endAngle(Math.PI / 2)           // End at 90 degrees
   )
   .attr("transform", "translate(125, 150)")  // Position it below the head
   .attr("fill", "#777");              // Color of the body

// Label underneath the icon
svg.append("text")
   .attr("x", 125)                    // Centered under the icon
   .attr("y", 190)                    // Position below the icon
   .attr("fill", "#777")              // Text color
   .attr("font-size", "14px")         // Font size
   .attr("font-family", "Trebuchet MS, sans-serif") // Font style
   .attr("text-anchor", "middle")
   .text("Untrusted origin");

// Draw the component box on the right side
svg.append("rect")
   .attr("x", 300)
   .attr("y", 100)
   .attr("width", 150)
   .attr("height", 60)
   .attr("fill", "#777");

// Add label inside the box on the right side
svg.append("text")
   .attr("x", 375)
   .attr("y", 135)
   .attr("fill", "#fff")
   .attr("font-size", "14px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("text-anchor", "middle")
   .text("Protected component");

// Draw the horizontal line with an arrow between the icon and the box
svg.append("line")
   .attr("x1", 150)                   // End of the icon
   .attr("y1", 130)
   .attr("x2", 300)                   // Start of the box
   .attr("y2", 130)
   .attr("stroke", "#777")
   .attr("stroke-width", 2)
   .attr("marker-end", "url(#arrow)");
