export default function( { dispatch } ){ //{ dispatch } бо передаємо функцію тому {myfunc}
    return next => action => {
//те ж саме що і:
// return function(next){
//     return function(action){
//          next(action);
//     }
// }
        console.log('action at start:',action); // ПЕРЕВІРЯЄМО ЧИ ACTION МІСТИТЬ PROMICE. 
        //Викликається два рази бо два рази проходиться по коду бо перший раз promice, а наступний object
        
        
        //якщо action не є payload 
        //або payload не має .then property, яке є тільки у проміс
        //то ми не турбуємся про відправку в наступний middleware

        //якщо маємо promice то не зайдемо в цей if і підемо далі..
        if(!action.payload || !action.payload.then){
            return next(action);   
        }

        //Переконатись чи promise в action-на Resolve 
        action.payload
            .then(function(response){
                //створюєм новий action з старим type, але 
                //замінюєм проміс на response data! Тепер вертає не проміс!
                
                const newAction = {...action,payload:response};
                dispatch(newAction);//А новий action без проміса і 
                //піде знову спочатку цього коду але на 14 строчці буде в if true і зайде в цей код return next(action);
            }); 
            // після того як буде все добре
        //next пересилає в інший middleware, якщо його не знаходить,
        //то пересилає в reducer
    };
}

//з цього файлу повертаєм функцію. Ми йдемо до іншої функції.
