const svg = d3.select("svg")
   .attr("width", 1000)  // Keep the existing width
   .attr("height", 600); // Keep the existing height

// Define gray arrow marker for directional arrows
svg.append("defs").append("marker")
   .attr("id", "arrow-gray")
   .attr("viewBox", "0 0 10 10")
   .attr("refX", 9)
   .attr("refY", 5)
   .attr("markerWidth", 6)
   .attr("markerHeight", 6)
   .attr("orient", "auto")
   .append("path")
   .attr("d", "M 0 0 L 10 5 L 0 10 Z")
   .attr("fill", "#777"); // Gray color

// Draw the gender-neutral person icon (Store Assistant) centered at the top
svg.append("circle")
   .attr("cx", 500)
   .attr("cy", 50)
   .attr("r", 15)
   .attr("fill", "#777");

svg.append("path")
   .attr("d", d3.arc()
      .innerRadius(0)  
      .outerRadius(30)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2)
   )
   .attr("transform", "translate(500, 90)")
   .attr("fill", "#777");

svg.append("text")
   .attr("x", 500)
   .attr("y", 30)  // Label positioned above the icon
   .attr("text-anchor", "middle")
   .attr("font-size", "12px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("fill", "#777")
   .text("Store Assistant");

// UI Component (externally exposed), shifted left
svg.append("rect")
   .attr("x", 150)
   .attr("y", 200)
   .attr("width", 150)
   .attr("height", 60)
   .attr("fill", "#777")
   .attr("stroke", "#777")
   .attr("stroke-width", 2);
svg.append("text")
   .attr("x", 225)
   .attr("y", 235)
   .attr("text-anchor", "middle")
   .attr("font-size", "14px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("fill", "#fff")
   .text("UI Component");

// Authentication Service, also shifted left
svg.append("rect")
   .attr("x", 600)
   .attr("y", 200)
   .attr("width", 150)
   .attr("height", 60)
   .attr("fill", "#777")
   .attr("stroke", "#777")
   .attr("stroke-width", 2);
svg.append("text")
   .attr("x", 675)
   .attr("y", 235)
   .attr("text-anchor", "middle")
   .attr("font-size", "14px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("fill", "#fff")
   .text("Authentication Service");

// Order Service, shifted left
svg.append("rect")
   .attr("x", 150)
   .attr("y", 450)
   .attr("width", 150)
   .attr("height", 60)
   .attr("fill", "#777")
   .attr("stroke", "#777")
   .attr("stroke-width", 2);
svg.append("text")
   .attr("x", 225)
   .attr("y", 485)
   .attr("text-anchor", "middle")
   .attr("font-size", "14px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("fill", "#fff")
   .text("Order Service");

// Orders Database, shifted left
svg.append("rect")
   .attr("x", 600)
   .attr("y", 450)
   .attr("width", 150)
   .attr("height", 60)
   .attr("fill", "#777")
   .attr("stroke", "#777")
   .attr("stroke-width", 2);
svg.append("text")
   .attr("x", 675)
   .attr("y", 485)
   .attr("text-anchor", "middle")
   .attr("font-size", "14px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("fill", "#fff")
   .text("Orders Database");

// Data Flows (Directional Arrows without labels)
// Store Assistant -> UI Component
svg.append("line")
   .attr("x1", 500)
   .attr("y1", 65)
   .attr("x2", 225)
   .attr("y2", 200)
   .attr("stroke", "#777")
   .attr("stroke-width", 4)
   .attr("marker-end", "url(#arrow-gray)");

// Store Assistant -> Authentication Service
svg.append("line")
   .attr("x1", 500)
   .attr("y1", 65)
   .attr("x2", 675)
   .attr("y2", 200)
   .attr("stroke", "#777")
   .attr("stroke-width", 4)
   .attr("marker-end", "url(#arrow-gray)");

// UI Component -> Authentication Service
svg.append("line")
   .attr("x1", 300)
   .attr("y1", 230)
   .attr("x2", 600)
   .attr("y2", 230)
   .attr("stroke", "#777")
   .attr("stroke-width", 4)
   .attr("marker-end", "url(#arrow-gray)");

// UI Component -> Order Service
svg.append("line")
   .attr("x1", 225)
   .attr("y1", 260)
   .attr("x2", 225)
   .attr("y2", 450)
   .attr("stroke", "#777")
   .attr("stroke-width", 4)
   .attr("marker-end", "url(#arrow-gray)");

// Order Service -> Orders Database
svg.append("line")
   .attr("x1", 300)
   .attr("y1", 480)
   .attr("x2", 600)
   .attr("y2", 480)
   .attr("stroke", "#777")
   .attr("stroke-width", 4)
   .attr("marker-end", "url(#arrow-gray)");
