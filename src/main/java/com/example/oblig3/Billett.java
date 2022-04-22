package com.example.oblig3;

public class Billett {
    private int id;
    private Integer film;
    private Integer antall;
    private String fornavn;
    private String etternavn;
    private String teleNr;
    private String epost;

    public Billett(Integer film, Integer antall, String fornavn, String etternavn, String teleNr, String epost){
        this.film = film;
        this.antall = antall;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.teleNr = teleNr;
        this.epost = epost;
    }
    public Billett(){

    }
    public Integer getFilm(){
        return film;
    }
    public void setFilm(Integer film){
        this.film = film;
    }
    public Integer getAntall(){
        return antall;
    }
    public void setAntall(Integer antall){
        this.antall = antall;
    }
    public String getFornavn(){
        return fornavn;
    }
    public void setFornavn(String fornavn){
        this.fornavn = fornavn;
    }
    public String getEtternavn(){
        return etternavn;
    }
    public void setEtternavn(String etternavn){
        this.etternavn = etternavn;
    }
    public String getTeleNr(){
        return teleNr;
    }
    public void setTeleNr(String teleNr){
        this.teleNr = teleNr;
    }
    public String getEpost(){
        return epost;
    }
    public void setEpost(String epost){
        this.epost = epost;
    }

}
