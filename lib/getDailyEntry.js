import dbConnect from '../lib/dbConnect';
import Product from '../models/Product';

export default async function getDailyEntry() {
    await dbConnect();
    
    let newEntry
    let freshEntry;

   
    // should enter if !isFresh || !lastEntry
    newEntry = await Product.findOne();

    return freshEntry = newEntry;
}