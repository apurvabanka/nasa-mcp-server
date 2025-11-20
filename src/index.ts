import { MCPServer } from "@mastra/mcp";
import { nasaPicOfDayTool } from "./tools/nasaPicOdDay.js";


const server = new MCPServer({
  name: "nasa-mcp-server",
  version: "1.0.0",
  tools: {nasaPicOfDayTool},
});

server.startStdio().catch((error) => {
  console.error("Error running MCP server:", error);
  process.exit(1);
});