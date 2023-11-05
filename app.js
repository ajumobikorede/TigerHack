import { createClient } from '@supabase/supabase-js';
import fetch from 'node-fetch';
const supabaseUrl = 'https://wmobftmcebatzfqjtyzw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indtb2JmdG1jZWJhdHpmcWp0eXp3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTE2MDc5MSwiZXhwIjoyMDE0NzM2NzkxfQ.Z-ZTAceuIvS_3IYSpxwOb96MExM-AV7YElQvFJTjUlY';
const supabase = createClient(supabaseUrl, supabaseKey);

import http from "http"
import express from "express"
import indexRouter from "./routes/index.js"

import { fileURLToPath } from "url" 
import { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const server = http.createServer(app)
app.set("view engine","ejs")
app.use('/',indexRouter)
app.use('/public',express.static(__dirname+"/public"))


app.get('/api/Ticket', async (req, res) => {
    try {
      const { data, error } = await supabase
        .from('Ticket') 
        .select('confirmation_no')
        .limit(10); 
      if (error) {
        console.error('Error fetching data:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      console.log('Data from the "Ticket" table:', data);

      return res.json(data);
    //   res.json(data);
    } catch (error) {
      console.error('Server error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  server.listen(3000)