import { Injectable } from '@angular/core';

@Injectable()
export class RestService {

    private inforest: Rest[]=[ //un arreglo de objetos
    {
      nombre: "HELADERÍA  CADORE",
      bio: "Cadore es una región del norte de Italia, sita a 110 km de Venecia, cerca de la frontera con Austria y rodeada por los Alpes. Allí a fines del siglo diecinueve, la familia Olivotti fundó la heladería Cadore, en la que tres generaciones de artesanos trabajaron entre 1881 y 1949 acunando las recetas familiares. En los años cincuenta estos artesanos embarcaron hacia América y llegaron a la Argentina. En 1957 se establecieron en la Av. Corrientes, en el mismo local que hasta hoy guarda celosamente aquellas deliciosas recetas familiares, y allí comenzaron a elaborar el Helado Artesanal que los convertiría en pocos años en una Heladería Tradicional de Buenos Aires. Conocé 'Cadore' donde la alquimia de lo artesanal, las recetas familiares atesoradas por generaciones y las mejores materias primas se conjugan en un Helado Artesanal delicioso, fresco y natural.",
      img: "assets/img/cadore.png",
      direccion: "Av. Corrientes 1695.",
      platoDelDia: "Postre o cuando quieras: Helados artesanales, sabor imperdible: Dulce de leche."

    },
    {
      nombre: "EL PALACIO DE LA PAPA FRITA",
      bio: "Este es otro de los clásicos reductos porteños, que cuenta con más de medio siglo de existencia. Durante mucho tiempo supo capitalizar el movimiento comercial de los cines y teatros de la Avenida Corrientes. Desde su inauguración en 1952, sigue ofreciendo jugosos bifes de chorizo de novillo de exportación, asado de tira de siete costillas, y unas papas fritas soufflé deliciosas, infladas como zeppelines cuyo  secreto está en el corte de la papa, la mezcla del aceite y la fritura en tres temperaturas distintas. Arturo Frondizi, Arturo Umberto Illia, Celia Cruz, Ástor Piazzola, Luis Aguilé y Julio Iglesias son algunos de los comensales que pasaron por sus mesas. También sirven reliquias gastronómicas, como buñuelos de verdura, escalopes a la romana, suprema a la Maryland, budín de pan y panqueque flambeado al ron.",
      img: "assets/img/elpalacio.png",
      direccion: "Av. Corrientes 1612.",
      platoDelDia: "Parrilla: Bife de chorizo con papas soufflé. Postre: Flan de dulce de leche con crema."

    },
    {
      nombre: "EL PINDAL",
      bio: "Un clásico de Villa Urquiza, ubicado en la esquina de Monroe y Triunvirato, cuenta con un amplio salón en planta baja y en el 1er. Piso cuenta con salón familiar y sector de juegos para chicos. El sector de Juegos cuenta con Playstation, materiales para pintar, juguetes educativos y la presencia de animadoras capacitadas para mimarlos y divertirlos. En fechas especiales se hacen actividades con maquillaje artístico para que la experiencia sea completa. Un lugar ideal para reencuentros con los amigos del barrio, disfrutar de una rica merienda con alguien especial o compartir un almuerzo familiar. En nuestro variado menú tenemos desde comidas caseras, minutas, pescadería, cortes de parrilla individuales hasta nuestra especialidad: las pastas (con gran variedad  de tipos y salsas) y pizzas a medio molde. Pero no poder irte sin probar nuestras tortas y un rico café para acompañarlas.",
      img: "assets/img/elpindal.png",
      direccion: "Av. Triunvirato 4700.",
      platoDelDia: "Pastas: Sorrentinos con salsa blanca. Postre: Café con torta de chocolinas."

    },
    {
      nombre: "PIZZERÍA GUERRIN",
      bio: "Sus fundadores fueron los genoveses Franco Malvezzi y Guido Grondona. Esta famosa pizzería, que nació hace más de 80 años, cuenta con 70 variedades de pizzas disponibles y es un paraíso para los amantes de la pizza al molde. Güerrín vende sus pizzas enteras o por porciones solamente dentro de su local. Su masa se trabaja todavía en forma manual en una gran batea a pesar de la asombrosa cantidad de pizzas despachadas a lo largo del día. Los clientes empiezan a poblar el local a partir de las 11 h y a medida que pasan las horas la concurrencia se vuelve caótica. Güerrín no tiene sucursales, y el único local que tiene se encuentra en el mismo lugar desde hace décadas. Consta de varios sectores bien diferenciados, de acuerdo a los distintos tipos de cliente.",
      img: "assets/img/guerrin.png",
      direccion: "Av. Corrientes 1368.",
      platoDelDia: "Pizza: Tradicional al molde y media masa de Provolone. Postre: Sopa Inglesa."

    },
    {
      nombre: "LA CHURRASQUITA",
      bio: "Desde 1945 cita obligada en la Av. Corrientes situado a metros del Obelisco, en el corazón de la zona de los Teatros, un lugar donde la exclusiva cocina internacional combina lo tradicional y lo exótico dando como resultado un Mix especial de formas y sabores. Las variadas especialidades gastronómicas son: Parrillada especial, con la mejor cocina Gourmet, Pescados y Mariscos, cocina Española y variadas especialidades gastronómicas. Sus salones en dos plantas, son ideales para almuerzos, cenas y todo tipo de eventos sociales o empresariales. Con el alma de los restaurantes clásicos. La Churrasquita mantiene vivo el espíritu de “La calle que nunca duerme”. De ambientación sobria, con mesas espaciosas y cómodos boxes, resulta el ámbito ideal a la hora de conocer la esencia gastronómica porteña. ",
      img: "assets/img/lachurrasquita.png",
      direccion: "Av. Corrientes 1220.",
      platoDelDia: "Parrilla: Parrillada completa. Postre: Brownie con helado."

    },
    {
      nombre: "LA GIRALDA",
      bio: "Se encuentra desde el año 1930 en el sector céntrico de la arteria en donde abundan los teatros y cines, donde hay una intensa vida cultural y nocturna. El café se mantiene con su mobiliario austero y original: las paredes blancas y recubiertas con azulejos del mismo color y paños de vidrio espejado, la vieja barra de madera a lo largo de uno de los laterales, y las mesas de madera y mármol. Conserva varios elementos distintivos que ha tenido desde sus inicios, como las luces de neón o el mármol de las mesas, los guardapolvos característicos de los mozos del puerto o las azucareras de vidrio, entre otros. Su especialidad es el chocolate caliente con churros. Ocupa la planta baja de un edificio de departamentos de estilo francés que fue construido en 1915, aunque la cafetería se instaló allí en 1951. En su fachada mantiene los viejos revestimientos de madera, con dos marquesinas para exhibir productos tradicionales y una sola ventana de guillotina.",
      img: "assets/img/lagiralda.png",
      direccion: "Av. Corrientes 1453.",
      platoDelDia: "Desayuno o Merienda: Chocolate caliente o café con leche con churros."

    },
    {
      nombre: "PIPPO",
      bio: "Pippo es un restaurant fundado en 1937, referente de la típica cocina porteña que se ubica en el barrio de Congreso de la ciudad de Buenos Aires. Este restaurant clásico cuenta con varias sucursales, entre ellas esta sucursal emplazada en la zona de Congreso, ideal para almuerzos ejecutivos en zona céntrica, para disfrutar del buen comer a buen precio. Sus especialidades son las pastas como los vermichellis con tuco y pesto, los ravioles, la lasagna, los ñoquis con salsa rosa, o los cortes de carne como el asado de tira. Excelente atención y un ambiente agradable para disfrutar con amigos o en familia de la clásica cocina argentina. Platos suculentos de cocina tradicional, se recomienda para argentinos de raza que buscan buenos momentos. Su público se dividía entre gente particular que solía degustar de unos clásicos fetuccini y quienes trabajaban en la calle Corrientes haciendo stand up. Pero también se ha visto a personajes como Jorge Altamira, Julio Chávez, Dalma Maradona, Ricky Maravilla y hasta fue el lugar donde se conocieron Charly García y Luis Alberto Spinetta.",
      img: "assets/img/pippo.png",
      direccion: "Montevideo 341.",
      platoDelDia: "Pastas: Vermichellis Caseros con Tuco y Pesto. Postre: Flan con crema."

    },
    {
      nombre: "PUMPER NIC",
      bio: "Pumper Nic cadena argentina de restaurantes de comida rápida, muy popular durante la década de 1980 y principios de la década de 1990. Alfredo Lowenstein creó Pumper Nic en 1974 a través de la empresa Facilven, a través de la cual desarrolló su negocio en Argentina. A partir de 1975, Pumper Nic comenzó a expandirse a través de franquicias. Su nombre está inspirado en un tipo de pan originario de Alemania, el pumpernickel. Sus menús más conocidos son el Mobur y Freny's, y su mascota el hipopótamo verde llamado Nic. Cuenta con salones en sus restaurantes para el festejo de cumpleaños infantiles, donde los chicos comparten de los menús infantiles, de actividades con los animadores. Y para el cumpleañero muchos regalos, un bolso de Pumper y la torta con la mascota del local.",
      img: "assets/img/pumpernic.png",
      direccion: "Av. Triunvirato 4552.",
      platoDelDia: "Fast food: Hamburguesa con queso y frenys (las papas fritas más ricas)."

    },
    {
        nombre: "UGI’S",
        bio: "Fundada en 1980 por Hugo Solís, que instaló el primer local en la esquina de Rivadavia y Suipacha, en el microcentro porteño, recién llegado de Estados Unidos y con el proyecto en mente.1 Con el paso de los años el negocio fue creciendo, llegando a tener 70 sucursales en Buenos Aires. Ugi's apuntó desde su creación al sector más económico de pizza al paso, teniendo mayor éxito en los sectores de gran flujo de pasajeros o peatones, y en barrios residenciales o de clase media-baja y baja. Sus locales tienen como mobiliario básico un horno a la piedra, un mostrador y barras para comer de parado, aunque ocasionalmente incluyen mesas y sillas. Con sucursales a lo largo de toda Buenos Aires, se destaca el de Carlos Pellegrini frente al Obelisco, donde transcurren escenas de la película Pizza, birra, faso (1998). Ugi's sólo vende pizza de muzzarella con salsa de tomate, utilizando queso producido por la misma empresa para autoabastecerse, aunque ocasionalmente ofrece fugazza con queso, y a fines de la década de 1990 también tenía una línea de gaseosas marca Ugi's, y medialunas. Es el punto de encuentro para el bajón porteño.",
        img: "assets/img/ugis.png",
        direccion: "Carlos Pellegrini 329.",
        platoDelDia: "Pizza: Media pizza de muzza. No a la droga, sí a la pizza."
  
      },
      {
        nombre: "VIA FLAMINIA",
        bio: "Heladería clásica, y ubicada en un lugar estratégico para calmar el calor porteño, la peatonal de Florida. Es visitada también por turistas durante todo el año y la clave de su éxito radica en la calidad de sus materias primas y en su afán de mantener sobre todo sus tradiciones intactas con el correr de los años. Más allá de las nuevas tendencias buscan mantener el espíritu vivo de los sabores naturales. La vainilla se prepara con chaucha, la fruta de estación se selecciona cuidadosamente y el dulce de leche se prepara casero con más de 12 horas de cocción. Los clásicos son los que más se venden y cuando hace mucho calor los de limón, frutilla y los de fruta, pero nadie se resiste al clásico denominado “espada” que arman los expertos heladeros con el baño de chocolate caliente.",
        img: "assets/img/viaflaminia.png",
        direccion: "Florida 121.",
        platoDelDia: "Postre o cuando quieras: Helados Artesanales. Recomendamos cucurucho bañado en chocolate."
  
      }

  ];

  vector = this.inforest;

  getRestaurantes(): Rest[]{
    return this.vector;
  }

  getComida( idx: string ){
    return this.vector[idx]; // .this: hace referencia los heroes
  }

  reset(){
    this.vector = this.inforest;
  }

  buscarComida( termino:string ): Rest[]{

    let resultados = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.vector.length; i ++ ){

      let rest = this.vector[i];

      let plato = rest.platoDelDia.toLowerCase();

      if( plato.indexOf( termino ) >= 0  ){
        rest.idx = i;
        resultados.push(  rest )
      }

    }

    if (termino.length == 0) {
      this.vector = this.inforest;
      resultados = this.vector;
    }
    else{
      this.vector = resultados;
    }
    
    return resultados;
  }

}

export interface Rest{
  nombre: string,
  bio: string,
  img: string,
  direccion: string,
  platoDelDia: string,
  idx?: number;
};