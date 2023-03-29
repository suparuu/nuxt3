export default defineEventHandler(async(event)=>{

    const method = getMethod(event);
    let rows;
    let q = '';


          if(method == 'POST'){
            let body = await readBody(event)
            let {name,content,date} = body;
            q = `insert into test (name, content, date) values ("${name}","${content}","${date}")`;
            [rows] = await event.context.db.execute(q);
          } else {
            q = 'select * from test';
            [rows] = await event.context.db.execute(q);

          }


    return rows;

})