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

import com.example.art4.modelos.Obra;
import com.example.art4.servicios.ObraServicio;

public class ObraControlador {

    @Autowired
    ObraServicio servicio;

    @PostMapping
    public ResponseEntity<?>controlarGuardado(@RequestBody Obra datos){
        return ResponseEntity.status(HttpStatus.OK).body(servicio.guardar_obra(datos));
    }

    @GetMapping
    public ResponseEntity<?>controlarListado(){
        return ResponseEntity.status(HttpStatus.OK).body(servicio.listar_obras());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?>controlarBuscarPorId(@PathVariable UUID id){
        return ResponseEntity.status(HttpStatus.OK).body(servicio.buscar_obra_por_id(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?>controlarModificar(@PathVariable UUID id, @RequestBody Obra datos){
        return ResponseEntity.status(HttpStatus.OK).body(servicio.modificar_Obra(id, datos));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?>controlarEliminar(@PathVariable UUID id){
        return ResponseEntity.status(HttpStatus.OK).body((servicio.eliminar_obra(id)));
    }
}

