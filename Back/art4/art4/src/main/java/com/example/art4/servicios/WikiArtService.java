package com.example.art4.servicios;

import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WikiArtService {

    private final RestTemplate restTemplate = new RestTemplate();
    
    // Reemplaza esto con tus credenciales universitarias reales
    private final String API_KEY = "";
    private final String SECRET_CODE = "";
    
    private String authSessionKey = null;

    /**
     * Se conecta a WikiArt para obtener la sesión inicial.
     */
    public void autenticarServidor() {
        String urlLogin = "https://www.wikiart.org/en/Api/2/login?accessCode=" + API_KEY + "&secretCode=" + SECRET_CODE;
        try {
            // Hacemos la petición de Login
            Map<String, Object> respuesta = restTemplate.getForObject(urlLogin, Map.class);
            if (respuesta != null && respuesta.containsKey("sessionKey")) {
                this.authSessionKey = (String) respuesta.get("sessionKey");
                System.out.println("====== WIKIART AUTENTICADO EXITOSAMENTE ======");
            }
        } catch (Exception e) {
            System.err.println("Error al autenticar con WikiArt: " + e.getMessage());
        }
    }

    /**
     * Obtiene las pinturas más vistas haciendo bypass/proxy.
     */
    public Map<String, Object> obtenerMostViewed(String paginationToken) {
        // Si por alguna razón se cayó o no se ha iniciado la sesión, intentamos reconectar
        if (this.authSessionKey == null) {
            autenticarServidor();
        }

        // 1. Construimos la URL base obligatoria con nuestra SessionKey de servidor
        String urlWikiArt = "https://www.wikiart.org/en/api/2/MostViewedPaintings?authSessionKey=" + this.authSessionKey;

        // 2. Si el Frontend nos envió un token para "cargar más", se lo concatenamos
        if (paginationToken != null && !paginationToken.trim().isEmpty()) {
            urlWikiArt += "&paginationToken=" + paginationToken;
        }

        try {
            // 3. Consumimos WikiArt y devolvemos el mapa de datos exacto al controlador
            return restTemplate.getForObject(urlWikiArt, Map.class);
        } catch (Exception e) {
            // Si el token expiró, lo limpiamos para que re-intente el login en la próxima petición
            this.authSessionKey = null; 
            throw new RuntimeException("Error al consultar la API de WikiArt: " + e.getMessage());
        }
    }
}
