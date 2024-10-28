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
   .attr("cx", 100)                    // X position of the head (moved left)
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
   .attr("transform", "translate(100, 150)")  // Position it below the head
   .attr("fill", "#777");              // Color of the body

// Label underneath the icon
svg.append("text")
   .attr("x", 100)                    // Centered under the icon
   .attr("y", 190)                    // Position below the icon
   .attr("fill", "#777")              // Text color
   .attr("font-size", "14px")         // Font size
   .attr("font-family", "Trebuchet MS, sans-serif") // Font style
   .attr("text-anchor", "middle")
   .text("Untrusted origin");

// Draw the component box on the right side
svg.append("rect")
   .attr("x", 500)                    // Moved right for increased spacing
   .attr("y", 100)
   .attr("width", 150)
   .attr("height", 60)
   .attr("fill", "#777");

// Add label inside the box on the right side
svg.append("text")
   .attr("x", 575)                    // Centered in the new box position
   .attr("y", 135)
   .attr("fill", "#fff")
   .attr("font-size", "14px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("text-anchor", "middle")
   .text("Protected component");

// Draw the longer horizontal line with an arrow between the icon and the box
svg.append("line")
   .attr("x1", 130)                   // End of the icon
   .attr("y1", 130)
   .attr("x2", 500)                   // Start of the box
   .attr("y2", 130)
   .attr("stroke", "#777")
   .attr("stroke-width", 4)           // Fixed thicker line width
   .attr("marker-end", "url(#arrow)")
   .style("cursor", "pointer")        // Change cursor on hover
   .on("mouseover", function() {      // Add hover effect for the sticky
      stickieRect.style("opacity", 1);   // Show the stickie note
      stickieText1.style("opacity", 1);  // Show the stickie note text line 1
      stickieText2.style("opacity", 1);  // Show the stickie note text line 2
   })
   .on("mouseout", function() {       // Reset on mouseout
      stickieRect.style("opacity", 0);   // Hide the stickie note
      stickieText1.style("opacity", 0);  // Hide the stickie note text line 1
      stickieText2.style("opacity", 0);  // Hide the stickie note text line 2
   });

// Add invisible "stickie note" square above the line
const stickieRect = svg.append("rect")
   .attr("x", 300)                    // Position above the line (centered)
   .attr("y", 40)                     // Higher above the line
   .attr("width", 60)                 // Square dimensions
   .attr("height", 60)
   .attr("fill", "yellow")
   .style("opacity", 0);              // Initially invisible

// Add first line of text inside the "stickie note" square
const stickieText1 = svg.append("text")
   .attr("x", 330)                    // Centered in the stickie note
   .attr("y", 60)                     // First line position
   .attr("fill", "#333")
   .attr("font-size", "10px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("text-anchor", "middle")
   .text("What can go")
   .style("opacity", 0);              // Initially invisible

// Add second line of text inside the "stickie note" square
const stickieText2 = svg.append("text")
   .attr("x", 330)                    // Centered in the stickie note
   .attr("y", 75)                     // Second line position
   .attr("fill", "#333")
   .attr("font-size", "10px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("text-anchor", "middle")
   .text("wrong here?")
   .style("opacity", 0);              // Initially invisible

// Add subtle microcopy with eye icon below the diagram
svg.append("text")
   .attr("x", 325)                    // Position near the center of the SVG
   .attr("y", 280)                    // Position below the diagram
   .attr("fill", "#888")              // Lighter color for subtlety
   .attr("font-size", "10px")         // Smaller font size
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("text-anchor", "middle")
   .text("👁️ Hover over elements to explore potential risks"); // Eye icon with text
