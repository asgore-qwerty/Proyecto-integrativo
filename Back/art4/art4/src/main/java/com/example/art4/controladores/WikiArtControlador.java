package com.example.art4.controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import com.example.art4.servicios.WikiArtService;

@RestController
@RequestMapping("/api/arte")
// IMPORTANTE: Cambia el puerto por el que use tu frontend (ej: 3000, 5500, etc.)
@CrossOrigin(origins = "http://localhost:5501") 
public class WikiArtControlador {

    @Autowired
    private WikiArtService wikiArtService;

    /**
     * Endpoint que llamará el Frontend.
     * Ejemplo primera página: GET /api/arte/populares
     * Ejemplo cargar más:    GET /api/arte/populares?token=abc123xyz
     */
    @GetMapping("/populares")
    public Map<String, Object> getPopulares(@RequestParam(required = false) String token) {
        return wikiArtService.obtenerMostViewed(token);
    }
}
