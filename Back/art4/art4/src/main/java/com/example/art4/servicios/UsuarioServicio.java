package com.example.art4.servicios;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.art4.modelos.Usuario;
import com.example.art4.repositorios.IUsuarioRepositorio;

@Service
public class UsuarioServicio {

    @Autowired
    private IUsuarioRepositorio repositorio;

    public Usuario guardar_usuario(Usuario datosUsuario){

        Usuario resultadoTransaccion=repositorio.save(datosUsuario);
        return resultadoTransaccion;
    }

    public List<Usuario> listar_usuarios(){
        List<Usuario> resultadoTransaccion=repositorio.findAll();
        return resultadoTransaccion;
    }

    public Usuario buscar_usuario_por_id(UUID id){
        Optional<Usuario> busqueda_usuario_transaccion=repositorio.findById(id);
        if(busqueda_usuario_transaccion.isEmpty()){
            throw new ResponseStatusException(
                HttpStatus.BAD_REQUEST,
                "El usuario que buscas no existe en la DB"
            );
            
        }
        return busqueda_usuario_transaccion.get();
    }

    public Usuario modificar_Usuario(UUID id, Usuario datosUsuarioNuevos){
        Optional<Usuario>usuario_que_estoy_buscando_transaccion=repositorio.findById(id);
        if (usuario_que_estoy_buscando_transaccion.isEmpty()) {
            throw new ResponseStatusException(
                HttpStatus.BAD_REQUEST,
                "El usuario que quieres modificar no existe en la DB"
            );
        }

        Usuario usuario_encontrado_en_db=usuario_que_estoy_buscando_transaccion.get();

        usuario_encontrado_en_db.setNombres(datosUsuarioNuevos.getNombres());
        usuario_encontrado_en_db.setPassword(datosUsuarioNuevos.getPassword());

        return repositorio.save(usuario_encontrado_en_db);
    }

    public boolean eliminar_usuario(UUID id){
        Optional<Usuario>usuario_que_estoy_buscando_transaccion=repositorio.findById(id);
        if (usuario_que_estoy_buscando_transaccion.isEmpty()) {
            throw new ResponseStatusException(
                HttpStatus.BAD_REQUEST,
                "El usuario que intentas eliminar no existe en la DB"
            );
        }
        repositorio.deleteById(id);
        return true;
    }
}
