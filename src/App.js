import axios from "axios";
import { useEffect, useState } from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Card from "./components/Card"

export default function App() {
  const [users, setUsers] = useState([]);

  console.log(users);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://hp-api.onrender.com/api/characters/students"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };

  // se tiver rotas elas ficam dentro do chakra
  return (
    <ChakraProvider resetCSS>
      <Flex gap={"1rem"} wrap={"wrap"} justifyContent={'center'}>
        {users && users.map((user) => {
          return (
            <Card
              key={user.id}
              userName={user.name}
              house={user.house}
              image={user.image}
            />
          )
        })}
      </Flex>
    </ChakraProvider>
  );
}
