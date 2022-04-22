package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BillettRepository {
    private final JdbcTemplate db;

    public BillettRepository(JdbcTemplate db) {
        this.db = db;
    }


    public void lagreBillett(Billett billett){
        String sql = "INSERT INTO BILLETT (film,antall,fornavn,etternavn,epost,teleNr) VALUES(?,?,?,?,?,?)";
        db.update(sql,billett.getFilm(),billett.getAntall(),billett.getFornavn(),billett.getEtternavn(),billett.getEpost(),billett.getTeleNr());
    }

    public List<Billett> hentAlleBilletter(){
        String sql = "SELECT * FROM billett";
        List<Billett> alleBilletter = db.query(sql,new
                BeanPropertyRowMapper(Billett.class));
        return alleBilletter;
    }

    public void slettAlleBilletter(){
      String sql = "DELETE from KUNDE";
      db.update(sql);
    }
}
