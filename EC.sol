pragma solidity ^0.4.25;
/** 
    Contrato usado por los nodos sentinelas para publicar los eventos de seguridad encontrados
**/

contract EC {
    enum EventType {Event,Alarm}
    
    event newEventCreated(uint256 timestamp,string _data,EventType event_type);
    
    //mapa con los eventos almacenados por dirección del nodo
    mapping(address => mapping(uint256 => Event))public  events;
    //mapa on la cantidad de eventos publicados por nodo 
    mapping(address => uint256)public  identifiers;
    //cantidad de eventos permitidos por nodo
    uint256 public threshold;
    //estructura de los eventos que son almacenados dentro de los smart contracts 
    struct Event {
        //timestamp cuando se genera el evento 
        uint256 timestamp;
        //descripción del evento de seguridad
        string data;
        EventType event_type;
    }
    //constructor donde se define el limite de eventos que se pueden almancenar
    constructor(uint256 _threshold) public { 
        threshold=_threshold;
    }

    // Create a new Event.
    function createEvent(uint256 timestamp,string _data,EventType _event_type) public {
        uint256 id_count;
        id_count=identifiers[msg.sender]+=1;
        //si el limite es alcanzado se sobreescribre sobre el mapa
        if(id_count==threshold)
            id_count=1;
        events[msg.sender][id_count]=Event(timestamp,_data,_event_type);
        emit newEventCreated(timestamp,_data,_event_type);
    }
    
    function setThreshold(uint256 _threshold){
        threshold=_threshold;
    }

}
