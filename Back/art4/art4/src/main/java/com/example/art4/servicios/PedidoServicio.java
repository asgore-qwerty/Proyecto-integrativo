package com.example.art4.servicios;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.art4.modelos.Pedido;
import com.example.art4.repositorios.IPedidoRepositorio;

@Service
public class PedidoServicio {
    @Autowired
    private IPedidoRepositorio repositorio;


   
    public Pedido guardar_Pedido(Pedido datosPedido){
        
        Pedido resultadoTransaccion=repositorio.save(datosPedido);
        return resultadoTransaccion;

    }

    //traer/leer/buscar/obtener (GET)

    //buscar todos los registro de la tabla
    public List<pedido> listar_Pedidos(){
        List<pedido> resultadoTransaccion=repositorio.findAll();
        return resultadoTransaccion;
    }

    //buscar 1 usuario por ID
    public Pedido buscar_pedido_por_id(UUID id){
        Optional<Pedido> pedido_que_estoy_buscando_transaccion=repositorio.findById(id);
        if(pedido_que_estoy_buscando_transaccion.isEmpty()){
            throw new ResponseStatusException(
                HttpStatus.BAD_REQUEST,
                "El pedido que buscas no existe en BD"
            );
        }
        return pedido_que_estoy_buscando_transaccion.get();
    }



    //modificar/cambiar/actualizar (PUT)
    public Pedido modificar_Pedido(UUID id, Pedido datosPedidoNuevos){
        Optional<Pedido>Pedido_que_estoy_buscando_transaccion=repositorio.findById(id);
        if (pedido_que_estoy_buscando_transaccion.isEmpty()){
            throw new ResponseStatusException(
                HttpStatus.BAD_REQUEST,
                "EL pedido que quiere modificar no existe en BD"
            );
        }
        //Cambio los datos que me envieen
        //nombres y la contraseña
        Pedido pedido_encontrar_en_bd = pedido_que_estoy_buscando_transaccion.get();

        pedido_encontrado_en_bd.setNombres(datosPedidoNuevos.getNombres());
        pedido_encontrado_en_bd.setContarseña(datospedidoNuevos.getContarseña());

        return repositorio.save(pedido_encontrado_en_bd);
    }

    //eliminar (DELETE)
    public boolean eliminar_pedido(UUID id){
        Optional<Pedido>pedido_que_estoy_buscando_transaccion=repositorio.findById(id);
        if(pedido_que_estoy_buscando_transaccion.isEmpty()){
            throw new ResponseStatusException(
                HttpStatus.BAD_REQUEST,
                "El pedido que quiere elimianr no existe en BD"
            );
        }
        repositorio.deleteById(id);
        return true;
    }
}
