'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('CicloParkings', [
      {
        Id: 1,
        Localizacion: 'Terminal Universidades',
        Direccion: 'Calle 16 entre carreras 100 y 98',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 2,
        Localizacion: 'Terminal Paso del Comercio',
        Direccion: 'Carrera 1A # 70A - 319',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 3,
        Localizacion: 'Terminal Menga',
        Direccion: 'Calle 70 norte entre avenida 3N y 3AN',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 4,
        Localizacion: 'Terminal Andres Sanin',
        Direccion: 'Calle 73 entre carrera 19 y 20',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 5,
        Localizacion: 'Terminal Calipso',
        Direccion: 'Carrera 36 entre carreras 28E y 28D5',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 6,
        Localizacion: 'Terminal Cañaveralejo',
        Direccion: 'Calle 5 # 50 - 46',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 7,
        Localizacion: 'Parque de las Banderas',
        Direccion: 'Calle 5 # carrera 34',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 8,
        Localizacion: 'Parque del Ingenio',
        Direccion: 'Carrera 80 entre calles 14 y 16',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 9,
        Localizacion: 'Ecoparque Pance',
        Direccion: 'Via La Voragine',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 10,
        Localizacion: 'Corredor Verde',
        Direccion: 'Carrera 8 # 48',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 11,
        Localizacion: 'Plazoleta Jairo Varela',
        Direccion: 'Avenida 2 Norte # 10',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 12,
        Localizacion: 'Parque la Alameda',
        Direccion: 'Carrera 23B # 7A',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 13,
        Localizacion: 'SENA Salomia',
        Direccion: 'Calle 52 entre carreras 2 y 3',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 14,
        Localizacion: 'SENA el Pondaje',
        Direccion: 'Calle 72K # 26J - 97',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 15,
        Localizacion: 'Institucion Educativa Nuevo Latir',
        Direccion: 'Calle 73 # 28D',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 16,
        Localizacion: 'Zoologico de Cali',
        Direccion: 'Carrera 1 oeste  entre carrera 2B oeste y carrera 2A',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 17,
        Localizacion: 'C.A.L.I. 10',
        Direccion: 'Calle 14B # 41 - 25',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 18,
        Localizacion: 'C.A.L.I. 15',
        Direccion: 'Carrera 41B # 50',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 19,
        Localizacion: 'C.A.L.I. 16',
        Direccion: 'Calle 38 # 41H',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 20,
        Localizacion: 'C.A.L.I. 17',
        Direccion: 'Calle 13B entre carreras 64 y 65',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 21,
        Localizacion: 'C.A.L.I. 18',
        Direccion: 'Calle 4 entre carreras 93 y 92',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 22,
        Localizacion: 'C.A.L.I. 20',
        Direccion: 'Carrera 52 # calle 2',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 23,
        Localizacion: 'C.A.L.I. 21',
        Direccion: 'Carrera 23 # 120',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 24,
        Localizacion: 'Salon Comunal Chiminangos 2',
        Direccion: 'Calle 62B  # 1A  -  80',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 25,
        Localizacion: 'CDAV La Flora',
        Direccion: 'Calle 70 norte # 3B - 81',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 26,
        Localizacion: 'Centro Comercial Aventura Plaza',
        Direccion: 'Carrera 100 # 16',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 27,
        Localizacion: 'Centro Comercial Carrera',
        Direccion: 'Calle 52 # 1B - 160',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 28,
        Localizacion: 'Institucion Educativa Simon Rodriguez',
        Direccion: 'Carrera 1D bis # 49 - 98',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 29,
        Localizacion: 'Colegio Luz Hayde Guerrero',
        Direccion: 'Carrera 28e 2 # 72s-26',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 30,
        Localizacion: 'Universidad Javeriana',
        Direccion: 'Calle 17A entre carreras 121 y 122',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 31,
        Localizacion: 'Universidad ICESI',
        Direccion: 'Calle 18 #122-135',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 32,
        Localizacion: 'Canchas Panamericanas',
        Direccion: 'Carrera 39 entre Calles 9 y 10',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 33,
        Localizacion: 'Ecoparque las Garzas',
        Direccion: 'Carrera 127 # 16A',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 34,
        Localizacion: 'Institucion Educativa INEM Jorge Isaccs',
        Direccion: 'Carrera 5 norte # 61N - 126',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 35,
        Localizacion: 'Institucion Educativa Eustaquio Palacios',
        Direccion: 'Carrera 52 # 2 - 61',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 36,
        Localizacion: 'Edificio Fuente Versalles',
        Direccion: 'Avenida 5AN # 20A - 08',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 37,
        Localizacion: 'Edificio San Marino',
        Direccion: 'Calle 14N # 6N - 23',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 38,
        Localizacion: 'Alcaldia de Santiago de Cali',
        Direccion: 'Avenida 2 norte # 10 - 70',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 39,
        Localizacion: 'Secretaria de Movilidad',
        Direccion: 'Carrera 1 # 14 - 40',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 40,
        Localizacion: 'Secretaria de Movilidad',
        Direccion: 'Carrera 3 entre calles 56 y 59',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 41,
        Localizacion: 'Edificio Boulevard de la Sexta',
        Direccion: 'Avenida 6N # 13N-50',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 42,
        Localizacion: 'Parque de las Orquideas',
        Direccion: 'Avenida 2 norte # 48N - 10',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 43,
        Localizacion: 'Secretaria de Salud',
        Direccion: 'Calle 4 # 36B - 40',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 44,
        Localizacion: 'C.A.L.I. 5',
        Direccion: 'Carrera 1D # 65 - 00',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 45,
        Localizacion: 'C.A.L.I. 6',
        Direccion: 'Carrera 8N # 70 - 16',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 46,
        Localizacion: 'C.A.L.I. 7',
        Direccion: 'Calle 73 con carrera 7M',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 47,
        Localizacion: 'Universidad Autonoma de Occidente',
        Direccion: 'Calle 25 # 155-85',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 48,
        Localizacion: 'Universidad del Valle',
        Direccion: 'Calle 13 #100-00',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 49,
        Localizacion: 'Universidad de San Buenaventura',
        Direccion: 'Carrera 122 #6-65',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 50,
        Localizacion: 'Universidad Santiago de Cali',
        Direccion: 'Calle 5 #  62 -00',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Si'
      },
      {
        Id: 51,
        Localizacion: 'Parque Barrio Las Camelias',
        Direccion: 'Calle 16a # 49a',
        Cupo: 10,
        Kit: 'No',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 52,
        Localizacion: 'San Judas Tadeo',
        Direccion: 'Calle 23 # 49a',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 53,
        Localizacion: 'Institución Educativa Carlos Holguín Lloreda',
        Direccion: 'Calle 23 # 40',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 54,
        Localizacion: 'Centro Docente No 126 I. Castilla',
        Direccion: 'CL15 # 33-82',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 55,
        Localizacion: 'Canchas Del Guabal',
        Direccion: 'Calle 18 # 40A',
        Cupo: 10,
        Kit: 'No',
        Senalizacion: 'No',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 56,
        Localizacion: 'San Cristobal',
        Direccion: 'Carrera 28 #26-28',
        Cupo: 10,
        Kit: 'No',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 57,
        Localizacion: 'Red Bibliotecas Publicas Las Acacias',
        Direccion: 'Carrera 24b #19 A -14',
        Cupo: 10,
        Kit: 'No',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 58,
        Localizacion: 'Parque Longitudinal 72w',
        Direccion: 'Calle 72w #28b',
        Cupo: 10,
        Kit: 'No',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 59,
        Localizacion: 'Iglesia Calipso Sector 2',
        Direccion: 'Transversal 28e # 72f 2',
        Cupo: 10,
        Kit: 'No',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 60,
        Localizacion: 'Centro De Emprendimiento Cultural Comuna 13',
        Direccion: 'Dg. 28d 3 #72f1',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 61,
        Localizacion: 'Ie Bartolomé Loboguerrero',
        Direccion: 'Calle 71 # 26E- 25',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 62,
        Localizacion: 'Ie Diez De Mayo',
        Direccion: 'Calle 26a # 25a',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 63,
        Localizacion: 'Parque Prados De Oriente',
        Direccion: 'Calle 29 # 25a',
        Cupo: 10,
        Kit: 'No',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 64,
        Localizacion: 'Colegio Antonio José Camacho',
        Direccion: 'Carrera 16 # 12-0',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 65,
        Localizacion: 'Ie Evaristo Garcia',
        Direccion: 'Calle 33a # 17f',
        Cupo: 10,
        Kit: 'No',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 66,
        Localizacion: 'Instituto Educativo Santa Fe Sede Manuel Rebolledo',
        Direccion: 'Calle 33e # 17f',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 67,
        Localizacion: 'Colegio Santa Fe Sede Puerto Rico',
        Direccion: 'Calle 33 # 17',
        Cupo: 10,
        Kit: 'No',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 68,
        Localizacion: 'Polideportivo El Trebol',
        Direccion: 'Calle 59 # 12 E',
        Cupo: 10,
        Kit: 'No',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 69,
        Localizacion: 'Parque Villa Colombia',
        Direccion: 'Carrera 13 #52-36',
        Cupo: 10,
        Kit: 'No',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 70,
        Localizacion: 'Parque Jovita',
        Direccion: 'Calle 5 # 15',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 71,
        Localizacion: 'Colegio Santa Librada',
        Direccion: 'Calle 7 # 14A-106',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 72,
        Localizacion: 'Institución Educativa Normal Superior',
        Direccion: 'Carrera 22 # 2-65',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 73,
        Localizacion: 'Gobernación Del Valle',
        Direccion: 'Calle 10 # 6',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 74,
        Localizacion: 'Parque El Peñon',
        Direccion: 'Calle 3 oeste # 3',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 75,
        Localizacion: 'La Merced - Bulevar Del Río',
        Direccion: 'Av. Colombia # Calle 7',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 76,
        Localizacion: 'Instituto Departamental Bellas Artes',
        Direccion: 'Avenida 2 Nte. # 7N-66',
        Cupo: 10,
        Kit: 'No',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 77,
        Localizacion: 'Centro Administrativo Municipal - Cam',
        Direccion: 'Avenida  2 Nte. #10-70',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 78,
        Localizacion: 'Parque Lineal Río Cali',
        Direccion: 'Avenida 2 Norte # 25',
        Cupo: 10,
        Kit: 'No',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 79,
        Localizacion: 'Centro Comunal Jorge Isaacs',
        Direccion: 'Calle 28 # 29',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 80,
        Localizacion: 'Parque Santander',
        Direccion: 'Calle 34 # 2',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 81,
        Localizacion: 'Parque Sultana - Berlín - San Fernando',
        Direccion: 'Calle 32 Norte # 2A',
        Cupo: 10,
        Kit: 'No',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 82,
        Localizacion: 'IE SANTO TOMÁS',
        Direccion: 'Calle 34 Nte. # 3N-15',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 83,
        Localizacion: 'Ieti Veinte De Julio',
        Direccion: 'Carrera 5 Nte. # 33N-01',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 84,
        Localizacion: 'ESTACION MANZANARES',
        Direccion: 'Calle 39 # 1',
        Cupo: 0,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 85,
        Localizacion: 'IETI JOSE ANTONIO GALAN',
        Direccion: 'Calle 41 Norte # 3',
        Cupo: 10,
        Kit: 'No',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 86,
        Localizacion: 'Popular - Parque La Sagrada Familia',
        Direccion: 'Calle 42N # 3a N',
        Cupo: 10,
        Kit: 'No',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 87,
        Localizacion: 'Estación Mio Popular',
        Direccion: 'Carrera 1 # 43 Norte',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 88,
        Localizacion: 'Centro Docente Rafael Zamorano Distrito Uno A',
        Direccion: 'Calle 45a N # 2N',
        Cupo: 10,
        Kit: 'No',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 89,
        Localizacion: 'Estación Mio Salomia',
        Direccion: 'Carrera 1 # 49 Norte',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 90,
        Localizacion: 'Centro Docente Fray Domingo De Las Casas No 62',
        Direccion: 'Calle 67 N # 6 N- 47',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 91,
        Localizacion: 'Calima',
        Direccion: 'Carrera 1 entre Cl 70 y 66)',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 92,
        Localizacion: 'Colegio Tenico Industrialpedro - Iglesia',
        Direccion: 'Calle 71 # 1a 12',
        Cupo: 10,
        Kit: 'No',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 93,
        Localizacion: 'Polideportivo Fonaviemcali',
        Direccion: 'Calle 70 # 1a5',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 94,
        Localizacion: 'Colegio Tecnico Industrial Pedro Antonio Molina',
        Direccion: 'Calle 71 # 1a-10',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 95,
        Localizacion: 'Polideportivo San Luis 2',
        Direccion: 'Calle 73 # 1a',
        Cupo: 10,
        Kit: 'No',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      },
      {
        Id: 96,
        Localizacion: 'Parque Oasis De Comfandi',
        Direccion: 'Carrera 3b Norte # 71e',
        Cupo: 10,
        Kit: 'Si',
        Senalizacion: 'Si',
        Lampara: 'Si',
        EstadoCiclo: 'Bueno'
      }
    ]);

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('CicloParkings', null, {});
  }
};
