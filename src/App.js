import './App.css';
import Testimonio from './componentes/testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dice nuestros alumnos sobre freeCodeCamp:</h1>
     <Testimonio
     nombre="emma bosian"
     pais="suecia"
     imagen="emma"
     negra="freeCodeCamp me dio las habilidades"
     cargo="ingeniera de software"
     demas=" y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
     empresa="spotify"
     Testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades"/>
     <Testimonio
     nombre="shawn wang "
     pais="singapur"
     imagen="shawn"
     negritas= "freeCodeCamp cambió mi vida."
     cargo="ingeniero en software"
     empresa="Amazon"
     Testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. 
    "/>
     <Testimonio
     nombre="sarah chima"
     pais="nigeria"
     imagen="sarah"
     negras="freeCodeCamp fue la puerta de entrada a mi carrera"
     cargo="ingenira de software"
     empresa="chatdesk"
     Testimonio=" como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble. "/>
     </div>
    </div>
  );
}

export default App;