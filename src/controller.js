import axios from "axios";
import crypto_Model  from './model.js'



const getcoins = async (req , res )=>{
    try {
        const option = {
            method : "GET" ,
            headers: {
                Authorization: " Bearer 99ed61cb-0c4c-4c5c-a5ed-4a9b74b1a67c",
              } ,
            url : "https://api.coincap.io/v2/assets",    
        }

        const result = await axios(option)
        const {data} = result.data
        data.sort((a,b)=> a.changePercent24Hr < b.changePercent24Hr)

        await crypto_Model.deleteMany()

    //  const data1 = await crypto_Model.insertMany(data)
        await data.forEach(a => {
           const finalDdata=  new crypto_Model(a) 
           finalDdata.save()          
        });
  
    return res.status(200).send({status:true , data :data})

    } catch (error) {
        res.send(error.message)   
    }
}

export const getcoin = getcoins