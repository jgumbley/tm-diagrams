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

// Draw the component boxes with hard-coded dimensions and positions
svg.append("rect")
   .attr("x", 50)              // Fixed X position
   .attr("y", 100)             // Fixed Y position
   .attr("width", 150)         // Fixed width for larger box
   .attr("height", 60)         // Fixed height for larger box
   .attr("fill", "#777");      // Box color

svg.append("rect")
   .attr("x", 300)             // Fixed X position for the second box
   .attr("y", 100)             // Fixed Y position (aligned horizontally with first box)
   .attr("width", 150)         // Fixed width for consistency
   .attr("height", 60)         // Fixed height
   .attr("fill", "#777");      // Box color

// Add labels inside each box with fixed positions and Trebuchet MS font
svg.append("text")
   .attr("x", 125)             // Fixed X position for text inside the first box
   .attr("y", 135)             // Fixed Y position for text centered in the box
   .attr("fill", "#fff")       // Text color
   .attr("font-size", "14px")  // Font size
   .attr("font-family", "Trebuchet MS, sans-serif") // Apply Trebuchet MS font
   .attr("text-anchor", "middle")
   .text("Less trusted origin");

svg.append("text")
   .attr("x", 375)             // Fixed X position for text inside the second box
   .attr("y", 135)             // Fixed Y position for text centered in the box
   .attr("fill", "#fff")       // Text color
   .attr("font-size", "14px")  // Font size
   .attr("font-family", "Trebuchet MS, sans-serif") // Apply Trebuchet MS font
   .attr("text-anchor", "middle")
   .text("Protected component");

// Draw the horizontal line with an arrow between the boxes, with fixed start and end points
svg.append("line")
   .attr("x1", 200)            // Fixed starting X position just past the first box
   .attr("y1", 130)            // Fixed Y position aligned with the box centers
   .attr("x2", 300)            // Fixed ending X position at the start of the second box
   .attr("y2", 130)            // Fixed Y position
   .attr("stroke", "#777")
   .attr("stroke-width", 2)
   .attr("marker-end", "url(#arrow)");  // Attach arrow marker
