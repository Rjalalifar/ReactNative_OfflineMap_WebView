import http from "./";

export const fetchCourses = async () => {
    // try{
    // const {data}=await http.get('http://192.168.227.1:8099/api/v1/products/')
    // console.log(data);
    
    // } catch (error){
    //     console.log('111'+error);
    // }

    // try {
    //     const {
    //         data: { courses },
    //     } = await http.get(`${http.url}/courses`);
    //     return courses;
    // } catch (err) {
    //     console.log(err);
    // }


    try {
        const {data} = await http.get(`${http.url}/products/`);
        return data;
    } catch (err) {
        console.log(err);
    }
};
