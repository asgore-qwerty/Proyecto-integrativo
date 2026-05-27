package com.example.art4.controladores;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.art4.modelos.Pedido;
import com.example.art4.servicios.PedidoServicio;
import com.example.art4.repositorios.IPedidoRepositorio;

@RestController
@RequestMapping("/api/v1/pedidos")
public class PedidoControlador {

    //1. Inyecto el servicio respectivo
    @Autowired
    PedidoServicio servicio;

    //2. Activo cada metodo o funcion que se programo en el servicio

    //Para activarlos debo crear una funcion que devuelve 
    //repsuesta al front

    @PostMapping
    public ResponseEntity<?>controlarGuardado(@RequestBody Pedido datos){
        return ResponseEntity.status(HttpStatus.OK).body(servicio.guardar_Pedido(datos));
    }

    @GetMapping
    public ResponseEntity<?>controlarListado(){
        return ResponseEntity.status(HttpStatus.OK).body(servicio.listar_Pedidos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?>controlarBuscarPorId(@PathVariable UUID id){
        return ResponseEntity.status(HttpStatus.OK).body(servicio.buscar_pedido_por_id(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?>controlarModificar(@PathVariable UUID id,@RequestBody Pedido datos){
        return ResponseEntity.status(HttpStatus.OK).body(servicio.modificar_Pedido(id, datos));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?>controlarEliminar(@PathVariable UUID id){
        return ResponseEntity.status(HttpStatus.OK).body(servicio.eliminar_pedido(id));
    }

}