function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ');
}
  
export default classes;

interface Options {
    extra: string | undefined
}

/*
{
    hasAside:true,
    clearfix:false,
    mt20:true
}
*/
interface ClassToggles {
    [K: string]: boolean
}

/*
将函数式 进行到底！！！
*/

const scopedClassMaker = (prefix: string) =>
     (name: string | ClassToggles , options?: Options) =>
    Object
    .entries(name instanceof Object ? name : {[name]:name})
    .filter(kv => kv[1] !==false)
    .map(kv => kv[0])
    .map(name => [prefix, name]
        .filter(Boolean)
        .join('-'))
    .concat( options && options.extra || [])
    .join(' ');

/*
function scopedClassMaker(prefix: string){

    return function (name: string | ClassToggles , options?: Options){
        const namesObject = (typeof name === 'string' || name === undefined) ?
            {[name]:name} :
            name;
        const scoped = Object
            .entries(namesObject)
            .filter(kv => kv[1] !==false)
            .map(kv => kv[0])
            .map(name => [prefix, name]
                .filter(Boolean)
                .join('-')
            ).join(' ');
        if(options && options.extra){
            return  [ scoped, options && options.extra].filter(Boolean).join(' ');
        }else{
            return scoped;
        }
    }
}
*/



/*
function scopedClassMaker(prefix: string){
    return function (name?: string | ClassToggles,options?: Options){
        let name2;
        let result;

        if( typeof name === 'string' || name === undefined){
            name2 = name;
            result = [prefix,name2].filter(Boolean).join('-');
        }else{
            // ['hasAside','x']
            name2 = Object.entries(name).filter(kv => kv[1]).map(kv => kv[0]);
            result = name2.map( n =>{
                return [prefix,n].filter(Boolean).join('-')
            }).join(' ')
            // ['fui-layout-hasAside', 'fui-layout-x']
        }
        if(options && options.extra){
            return  [ result, options && options.extra].filter(Boolean).join(' ');
        }else{
            return result;
        }
    }
}
*/

export {scopedClassMaker};

