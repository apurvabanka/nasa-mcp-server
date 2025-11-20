import { createTool } from '@mastra/core/tools';
import { z } from "zod";
import axios from "axios";

const apiKey = process.env.NASA_API_KEY || 'DEMO_KEY';

export async function fetchNasaPicOfDay (
    date: string | undefined,
    apiKey: string
){
    try{
        const response  = await axios.get('https://api.nasa.gov/planetary/apod?api_key=' + apiKey + (date ? `&date=${date}` : ''));
        return {
            title: response.data.title,
            url: response.data.url,
            explanation: response.data.explanation,
            date: response.data.date,
            copyright: response.data.copyright || 'Public Domain'
        }
    }
    catch (error){
        throw new Error('Failed to fetch NASA Picture of the Day: ' + error);
    }
}

export const nasaPicOfDayTool = createTool({
    id: "Nasa Picture of the Day Tool",
    description: 'Fetches the NASA Picture of the Day for a given date. If no date is provided, fetches today\'s picture.',
    inputSchema: z.object({
        date: z.string().optional().describe('The date for which to fetch the picture in YYYY-MM-DD format. If not provided, fetches today\'s picture.')
    }),
    execute: async ({ context }: { context: { date?: string } }) => { 
        const picData = await fetchNasaPicOfDay(context.date, apiKey); // Changed 'date' to 'context.date'
        return `Title: ${picData.title}\nDate: ${picData.date}\nURL: ${picData.url}\nExplanation: ${picData.explanation}\nCopyright: ${picData.copyright}`;
    },
});

