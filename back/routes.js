var MailModel = require('./MailModel');


module.exports = function (app)
{
/* API RESTFULL POUR GESTION DES MAILS */

  /* Renvoie tous les mails */
  app.get('/mail', function (req, res) {
    MailModel.getMails(function (mails){
      return res.send(mails);
    });
  });

  /* permet de cibler un mail spécifique */
  app.get('/mail/:id', function (req, res) {
    return res.send(['lol', 'lal']);
  });

  /* permet d'ajouter un mail en bdd */
  app.post('/mail', function (req, res) {
    MailModel.addMail(req.body, function (newMail){
      return res.send(newMail);
    });
  });

  /*permet de modifier un mail*/


  /* permet de supprimer un mail */
  app.delete('/mail', function (req, res) {
    return res.send(['lol', 'lal']);
  });

}
