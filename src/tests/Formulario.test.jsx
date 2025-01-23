import { render, screen } from "@testing-library/react";
import Formulario from "../components/Formulario";
import userEvent from "@testing-library/user-event";

describe('Formulario componente', () => {

    let h2;
    let h6;
    let gato;
    let button;
    let textfield_nombre;
    let textfield_edad;
    beforeEach(() => {
        render(<Formulario/>); 
        h2 = screen.getByRole('heading', h2, {name: 'Rellena el formulario'});
        h6 = screen.getByRole('heading', h6);
        gato = screen.getByRole('img', {name: 'icono'});
        textfield_nombre = screen.getByLabelText('Nombre');
        textfield_edad = screen.getByLabelText('Edad');
        button = screen.getByRole('button', { name: 'Enviar' });
    });


    it('Comprobar  de que se renderiza la cabecera con contenido “Rellena el formulario”', () => {
        expect(h2).toBeInTheDocument();
    });

    it('Comprobar de que se renderiza la imagen del gato ', () => {
        expect(gato).toBeInTheDocument();
    });

    it('Comprobar de que se renderiza el campo de texto nombre ', () => {
        expect(textfield_nombre).toBeInTheDocument();
    });
    
    it('Comprobar de que se renderiza el campo de texto edad ', () => {
        expect(textfield_edad).toBeInTheDocument();
    });
    
    it('Se renderiza el botón', () => {
        expect(button).toBeInTheDocument();
    });

    it('Comprobar de que cuando el usuario rellena el formulario aparece una cabecera de nivel 6 en el formulario', async () => {
        const user = userEvent.setup()  
        await user.clear(textfield_nombre); 
        await user.clear(textfield_edad); 
        await user.type(textfield_nombre, 'Paquito'); 
        expect(textfield_nombre).toHaveValue('Paquito'); 
        await user.type(textfield_edad, '22'); 
        expect(textfield_edad).toHaveValue(22);
        await user.click(button); 
        expect(h6).toBeInTheDocument(); 
      });

    });