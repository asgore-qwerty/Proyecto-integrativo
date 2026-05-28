package com.example.art4.servicios;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.art4.modelos.Obra;
import com.example.art4.repositorios.IObraRepositorio;

@Service
public class ObraServicio {

    private final IObraRepositorio IObraRepositorio;
    @Autowired
    private IObraRepositorio repositorio;

    ObraServicio(IObraRepositorio IObraRepositorio) {
        this.IObraRepositorio = IObraRepositorio;
    }

    public Obra guardar_obra(Obra datosObra){

        Obra resultadoTransaccion=repositorio.save(datosObra);
        return resultadoTransaccion;
    }

    public List<Obra> listar_obras(){
        List<Obra> resultadoTransaccion=repositorio.findAll();
        return resultadoTransaccion;
    }

    public Obra buscar_obra_por_id(UUID id){
        Optional<Obra> busqueda_obra_transaccion=repositorio.findById(id);
        if(busqueda_obra_transaccion.isEmpty()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                "La obra que buscas no existe en la DB"
            );
        }
        return busqueda_obra_transaccion.get();
    }

    public Obra modificar_Obra(UUID id, Obra datosObraNuevos){
        Optional<Obra>busqueda_obra_transaccion=repositorio.findById(id);
        if (busqueda_obra_transaccion.isEmpty()){
            throw new ResponseStatusException(
                HttpStatus.BAD_REQUEST,
                "La obra que quieres modificar no existe en DB"
            );
        }

        Obra obra_encontrada_en_db=busqueda_obra_transaccion.get();

        obra_encontrada_en_db.setTitulo(datosObraNuevos.getTitulo());
        obra_encontrada_en_db.setAutor(datosObraNuevos.getAutor());
        obra_encontrada_en_db.setAño(datosObraNuevos.getAño());
        obra_encontrada_en_db.setEstilo(datosObraNuevos.getEstilo());
        obra_encontrada_en_db.setImagen(datosObraNuevos.getImagen());
        obra_encontrada_en_db.setAlt(datosObraNuevos.getAlt());
        return obra_encontrada_en_db;
    }

    public boolean eliminar_obra(UUID id){
        Optional<Obra>busqueda_obra_transaccion=repositorio.findById(id);
        if (busqueda_obra_transaccion.isEmpty()) {

            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                "La obra que intentas eliminar no existe en la DB"
            );
        }
        repositorio.deleteById(id);
        return true;
    }
}
