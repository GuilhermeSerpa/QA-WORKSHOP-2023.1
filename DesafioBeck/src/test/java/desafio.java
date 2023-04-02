import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.testng.Assert;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class desafio {

    private String urlBase;
    private String endpoint;

    // Configuração inicial para as requisições
    @BeforeClass
    public void configurar() {
        RestAssured.baseURI = "https://reqres.in";
        RestAssured.basePath = "/api";
        urlBase = RestAssured.baseURI + RestAssured.basePath;
        endpoint = "/users";
    }

    // Teste para verificar se a requisição GET retorna status code 200
    @Test
    public void testarGetUsuarios() {
        Response resposta = RestAssured.given().contentType(ContentType.JSON).get(urlBase + endpoint);
        Assert.assertEquals(resposta.getStatusCode(), 200);
    }

    // Teste para verificar se a requisição GET com ID retorna status code 200
    @Test
    public void testarGetUsuarioPorId() {
        int id = 2;
        Response resposta = RestAssured.given().contentType(ContentType.JSON).get(urlBase + endpoint + "/" + id);
        Assert.assertEquals(resposta.getStatusCode(), 200);
    }

    // Teste para verificar se a requisição POST retorna status code 201
    @Test
    public void testarPostUsuario() {
        String corpoRequisicao = "{\n" +
                "    \"name\": \"João\",\n" +
                "    \"job\": \"Testador\"\n" +
                "}";
        Response resposta = RestAssured.given().contentType(ContentType.JSON).body(corpoRequisicao).post(urlBase + endpoint);
        Assert.assertEquals(resposta.getStatusCode(), 201);
    }
}
