export default function modelsDecorator(entity1, entity2, keyTitle, keyTwo){
    let idKey
    if(!entity2.length){
        return entity1
    }
    if (!!entity2[0].dataValues){
        idKey = Object.keys(entity2[0].dataValues).filter((item) => item.includes('Id'))
    } else {
        idKey = Object.keys(entity2[0]).filter((item) => item.includes('Id'))
    }

    let result = entity1.map(value => {
        let arr = []
        entity2.forEach((item)=>{
            if(value.id == item[keyTwo || idKey[0]]){
                arr.push(item)
            }
        })
        return {...value.dataValues, [keyTitle]: arr}
    })
    return result
}