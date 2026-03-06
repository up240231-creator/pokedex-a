import PokemonCard from "@/components/PokemonCard";
import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";


export default function Index() {
  const [results, setresults]= useState<any[]> ([]);

  useEffect(() => {
    console.log("Entre entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const URL= "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    const response = await fetch(URL, {
      method: "GET"
    });
    console.log(response)
    const data= await response.json();
    console.log(data.results); 
    setresults(data.results);
  };



  return ( 
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
    
    <View>
      {results.map((pokemon)=>{
        return(
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            url= {pokemon.url }
            />
        )   

      })}
    </View>
    </ScrollView>
  );
}
