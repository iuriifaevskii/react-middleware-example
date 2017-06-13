export default function( { dispatch } ){ //{ dispatch } бо передаємо функцію тому {myfunc}
    return next => action => {
//те ж саме що і:
// return function(next){
//     return function(action){
//          next(action);
//     }
// }
        console.log('action at start:',action);
        //якщо action не є payload 
        //або payload не має .then property, яке є тільки у проміс
        //то ми не турбуємся про відправку в наступний middleware

        if(!action.payload || !action.payload.then){
            return next(action);    //НЕ ЗАХОДИТЬ СЮДИ
        }

        console.log('we dont have a promise',action);   //ЗАХОДИТЬ СЮДИ і не йде далі в reducer бо немає next(action)

        //next пересилає в інший middleware, якщо його не знаходить,
        //то пересилає в reducer
    };
}

//з цього файлу повертаєм функцію. Ми йдемо до іншої функції.
