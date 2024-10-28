const svg = d3.select("svg");

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
   .attr("d", "M 0 0 L 10 5 L 0 10 Z")  // Triangle shape for arrowhead
   .attr("fill", "#777");               // Gray color

// Draw the gender-neutral person icon (Store Assistant)
svg.append("circle")
   .attr("cx", 100)
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
   .attr("transform", "translate(100, 90)")
   .attr("fill", "#777");

svg.append("text")
   .attr("x", 100)
   .attr("y", 30)
   .attr("text-anchor", "middle")
   .attr("font-size", "12px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("fill", "#777")
   .text("Store Assistant");

// UI Component (externally exposed)
svg.append("rect")
   .attr("x", 300)
   .attr("y", 150)
   .attr("width", 150)
   .attr("height", 60)
   .attr("fill", "#777")
   .attr("stroke", "#777")
   .attr("stroke-width", 2);
svg.append("text")
   .attr("x", 375)
   .attr("y", 185)
   .attr("text-anchor", "middle")
   .attr("font-size", "14px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("fill", "#fff")
   .text("UI Component");

// Authentication Service
svg.append("rect")
   .attr("x", 600)
   .attr("y", 150)
   .attr("width", 150)
   .attr("height", 60)
   .attr("fill", "#777")
   .attr("stroke", "#777")
   .attr("stroke-width", 2);
svg.append("text")
   .attr("x", 675)
   .attr("y", 185)
   .attr("text-anchor", "middle")
   .attr("font-size", "14px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("fill", "#fff")
   .text("Authentication Service");

// Order Service
svg.append("rect")
   .attr("x", 300)
   .attr("y", 350)
   .attr("width", 150)
   .attr("height", 60)
   .attr("fill", "#777")
   .attr("stroke", "#777")
   .attr("stroke-width", 2);
svg.append("text")
   .attr("x", 375)
   .attr("y", 385)
   .attr("text-anchor", "middle")
   .attr("font-size", "14px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("fill", "#fff")
   .text("Order Service");

// Orders Database
svg.append("rect")
   .attr("x", 600)
   .attr("y", 350)
   .attr("width", 150)
   .attr("height", 60)
   .attr("fill", "#777")
   .attr("stroke", "#777")
   .attr("stroke-width", 2);
svg.append("text")
   .attr("x", 675)
   .attr("y", 385)
   .attr("text-anchor", "middle")
   .attr("font-size", "14px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("fill", "#fff")
   .text("Orders Database");

// Data Flows (Directional Arrows without labels)
// Store Assistant -> UI Component
svg.append("line")
   .attr("x1", 100)
   .attr("y1", 65)
   .attr("x2", 325)
   .attr("y2", 150)
   .attr("stroke", "#777")
   .attr("stroke-width", 4)
   .attr("marker-end", "url(#arrow-gray)");

// Store Assistant -> Authentication Service
svg.append("line")
   .attr("x1", 100)
   .attr("y1", 65)
   .attr("x2", 650)
   .attr("y2", 150)
   .attr("stroke", "#777")
   .attr("stroke-width", 4)
   .attr("marker-end", "url(#arrow-gray)");

// UI Component -> Order Service
svg.append("line")
   .attr("x1", 375)
   .attr("y1", 210)
   .attr("x2", 375)
   .attr("y2", 350)
   .attr("stroke", "#777")
   .attr("stroke-width", 4)
   .attr("marker-end", "url(#arrow-gray)");

// Order Service -> Orders Database
svg.append("line")
   .attr("x1", 450)
   .attr("y1", 380)
   .attr("x2", 600)
   .attr("y2", 380)
   .attr("stroke", "#777")
   .attr("stroke-width", 4)
   .attr("marker-end", "url(#arrow-gray)");
