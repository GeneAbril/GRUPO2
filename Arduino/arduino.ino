#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266HTTPClient.h>
#include <DHT.h>// incluir libreria del sensor
#include <DHT_U.h>
#define DHTTYPE DHT11 // DHT 11 sensor usado
#define dht_dpin 0 //A que pin esta conectado el sensor
//#include <ArduinoJson.h>

DHT dht(dht_dpin, DHTTYPE);

//Conectarse a Wifi
const char* ssid = "tu red";
const char* password = "tu clave";

// Conectarse a Wifi

//StaticJsonBuffer<200> jsonBuffer;

void setup() {
  dht.begin();
  Serial.begin(9600);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Conectando...");
  }

 Serial.println("****************************************");
 Serial.println(" Programa para enviar temperatura u humedad con DHT11");
 Serial.println("****************************************");
}

void loop() {
  // SI ESTA CONECTADO A UN WIFI:    
  if (WiFi.status() == WL_CONNECTED) {
    
    WiFiClient client;
    HTTPClient http;

    // URL API
    String link = "http://nodemcuesp8266test.herokuapp.com/";
    //String link = "http://192.168.100.3:3000/";

    Serial.println(link);
    http.begin(client, link);

    
    Serial.println("*******************************\n");

    float t = dht.readTemperature();
    float h = dht.readHumidity();

    delay(4000);

    Serial.println(t);
    Serial.println(h);

    /*JsonObject& values = jsonBuffer.createObject();
    values["humidity"] = h;
    values["temperatura"] = t;
    */
   
    //POST request
    http.addHeader("Content-Type", "application/json");
    //String Data = "{\"temperatura\" : t }";
    int httpResponseCode = http.POST("{\"temperatura\":\"" + String(t) + "\",\"humedad\":\"" + String(h) + "\"}");
    //"{\"temperatura\" : "+ String(t)+"\",\"humedad\" : "+ String(h)+"}"
    Serial.println("POST");

    //GET request
    //int httpResponseCode = http.GET();
    //Serial.println("GET");

    // RESPUESTA DESDE SERVIDOR
    String payload = http.getString();
    Serial.print("HTTP responde code: ");
    Serial.println(httpResponseCode);
    Serial.print(payload);

    // CERRAR CONECION
    http.end();
  }
    // ESPERAR 1 MIN Y VOLVER A EJECUTAR LOOP
    delay(60000);
}
