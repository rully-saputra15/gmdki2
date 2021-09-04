import React from 'react';
import logo from './asset/logo.jpeg';
import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import './App.css';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';

const useStyles = makeStyles((theme) => ({
  main:{
    flexGrow: 1,
    marginTop:10,
    fontFamily:"'Roboto Slab', sans-serif"
  },
  titlePage:{
    marginTop:8,
    fontSize:"7vmin",
    fontWeight:600
  },
  subtitlePage:{
    fontSize:"4vmin",
    fontWeight:300
  },
  containerRules:{
    display:"flex",
    flexDirection:"column",

    margin:16,
    borderRadius:10,
  },
  containerRulesItem:{
    padding:14,
  },
  titleRules:{
    textAlign:"center",
    fontSize:"5vmin",
    borderRadius:8,
    paddingTop:6,
    paddingBottom:6,
    fontWeight:600,
    marginBottom:8,
    width:"100%",
    backgroundColor:"#FDDD62"
  },
  itemRule:{
    fontSize:"4vmin",
    textAlign:"justify",
    listStyleType:"none",
    marginBottom:8
  },
  buttonRegister:{
    backgroundColor:"#FDDD62",
    marginBottom:32,
    fontSize:"4vmin",
    fontWeight:600
  }
}))
const App = () => {
  const classes = useStyles();
  const rules = ["Pendaftaran turnamen akan dibuka dari tanggal 8 september sampai 15 september 2021.",
    "Pendaftaran turnamen tidak memungut biaya (gratis broooo).",
    "Hadiah untuk pemenang turnamen adalah sebesar Rp500.000/tim (lumayan untuk belanja).",
    "1 tim maksimal memiliki 2 anggota non-BDI.",
    "Tidak diperbolehkan ada pemain esport ML profesional (tidak tergabung dalam grup esport manapun) demi kesenangan bersama. Jangan lupa ini match hepi hepi ae.",
    "Anggota tim tidak wajib 1 daerah yang penting sehati.",
    "Tim yang sudah siap boleh langsung mendaftar karena slot turnamen terbatas.",
    "1 tim dapat memiliki pemain maksimal 6 orang (siapa tau ada yang mau BAB).",
    "Wajib memiliki nama tim (tidak mengandung unsur SARA).",
    "Sistem permainan dan peraturan permainan akan dijelaskan pada saat technical meeting.",
    "Pelanggaran peraturan akan berujung diskualifikasi.",
    "Turnamen akan dilaksanakan selama satu hari, yaitu hari sabtu tanggal 18 September 2021 jam 19.00 sampai selesai.",
    "Segala hal yang bersangkutan dengan turnamen ini akan dibahas di grup WhatsApp atau CP (ga make bbm lagi bro).",
    "Jika ada perubahan informasi, maka akan diinformasikan kepada nomor yang diberikan oleh pendaftar."];
  const linkRegister = "https://forms.office.com/Pages/ResponsePage.aspx?id=ZlW0yvuRWUWVZ2jDlyP4-v75_LQmwPhMu54xJo_pPaFUNzI5QU5HRjFXSUI5UU9CVVVMSFZLUFJSMC4u";
  const goToRegisterPage = () => {
    window.open(linkRegister)
  }
  return (
    <div className={classes.main}>
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <img src={logo} className="App-logo" alt="logo" />
        <span className={classes.titlePage}>Friendly Match</span>
        <span className={classes.subtitlePage}>Let's Play Together</span>
        <Paper elevation={3} className={classes.containerRules}>
          <span className={classes.titleRules}>General Rules</span>
          <div className={classes.containerRulesItem}>
            {rules.map((item: string) => {
              return <div className={classes.itemRule}>- {item}</div>
            })}
          </div>
        </Paper>
        <Button variant="contained" className={classes.buttonRegister}
                onClick={() => goToRegisterPage()}
                startIcon={<AssignmentRoundedIcon/>}>Register</Button>
      </Grid>

    </div>
  );
}

export default App;
