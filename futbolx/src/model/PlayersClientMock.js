
export default function  getPlayers(){
    return new Promise(
        (resolver,rechazar)=>
        {
            resolver(

                {json:() => {
                return []//[{"name":"leo","ability":10.0},{"name":"facu","ability":9.0},{"name":"nico","ability":7.0},{"name":"juancito","ability":7.0},{"name":"Cris","ability":3.0},{"name":"Fede","ability":4.0},{"name":"Edu","ability":7.0}]
            }}

        )
        }
    )
}