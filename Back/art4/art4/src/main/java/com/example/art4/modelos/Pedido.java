package com.example.art4.modelos;

import java.time.LocalDate;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "pedidos")
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private LocalDate fecha;
    private Integer costoTotal;
    private UUID id_usuario;
    private UUID id_obra;
    
    public UUID getId() {
        return id;
    }
    public void setId(UUID id) {
        this.id = id;
    }
    public LocalDate getFecha() {
        return fecha;
    }
    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }
    public Integer getCostoTotal() {
        return costoTotal;
    }
    public void setCostoTotal(Integer costoTotal) {
        this.costoTotal = costoTotal;
    }
    public UUID getId_usuario() {
        return id_usuario;
    }
    public void setId_usuario(UUID id_usuario) {
        this.id_usuario = id_usuario;
    }
    public UUID getId_obra() {
        return id_obra;
    }
    public void setId_obra(UUID id_obra) {
        this.id_obra = id_obra;
    }

    


}
