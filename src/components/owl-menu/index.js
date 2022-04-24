import { IoPerson, IoAccessibility,IoListSharp } from 'react-icons/io5';
// import ReactOwlCarousel from 'react-owl-carousel'; 'react-owl-carousel';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import { Icon, OwlItem, Text } from './styles';
import { NavLink } from 'react-router-dom';


export function OwlMenu() {
    return (
        <>

            <ReactOwlCarousel className='owl-theme' items={4}  loop nav margin={3}>
              <OwlItem>
                  <Text>
                    <h4>Usuarios</h4>
                    <p>Total de usuarios: 32</p> 
                    <NavLink to='/'>Acessar</NavLink>
                  </Text>
                  <Icon>
                    <IoPerson />
                  </Icon>
              </OwlItem>
              <OwlItem>
                  <Text>
                    <h4>Contas</h4>
                    <p>Total de contas: 32</p>
                    <NavLink to='/'>Acessar</NavLink>
                  </Text>
                  <Icon>
                    <IoAccessibility />
                  </Icon>
              </OwlItem>
              <OwlItem>
                  <Text>
                    <h4>Categorias</h4>
                    <p>Total de categoria: 10</p>
                    <NavLink to='/'>Acessar</NavLink>
                  </Text>
                  <Icon>
                    <IoListSharp />
                  </Icon>
              </OwlItem>
            </ReactOwlCarousel>
        </>
    )
}