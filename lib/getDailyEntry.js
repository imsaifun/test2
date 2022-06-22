import EntryModel from '../models/EntryModel';
import dbConnect from '../lib/dbConnect';
import { Temporal } from '@js-temporal/polyfill';

export default async function getDailyEntry() {
    await dbConnect();
    
    let newEntry
    let freshEntry;

   
    // should enter if !isFresh || !lastEntry
    newEntry = await EntryModel.findOne();

    return freshEntry = newEntry;
}