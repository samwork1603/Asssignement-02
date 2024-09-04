import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/user-details");
  };
  return (
    <Container >
      <Button onClick={handleNav}>User Details</Button>
    </Container>
  );
};

export default Home;
