import { createClient } from '@sanity/client';

export default createClient({
    projectId : '9wwojjyu',
    dataset : 'greenheap-enterprises',
    useCdn : true,
    apiVersion : '2025-07-27'
});