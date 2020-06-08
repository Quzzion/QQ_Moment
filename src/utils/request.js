export default async function request(url){
    const res = await fetch(`https://www.fastmock.site/mock/2c5613db3f13a5c02f552c9bb7e6620b/f5${url}`);
    const myJson = await res.json();
    // console.log(myJson);
    return myJson;
}