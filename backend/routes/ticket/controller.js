import TicketModel from "../../models/Ticket.js ";
import UserModel from "../../models/User.js ";
export default {
  createTicket: async (req, res) => {
    //  use the Model
    const newTicket = new TicketModel({
      user: req.user.id,
      name: req.body.name,
      email: req.body.email,
      product: req.body.product,
      desc: req.body.desc,
    });
    // save the modle data into the database
    newTicket
      .save()
      .then((ticket) => {
        res.status(200).json(ticket);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  //Update  ticket
  updateTicket: async (req, res) => {
    try {
      const ticket = await TicketModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { upsert: true, setDefaultsOnInsert: true, new: true }
      );
      // [yup this looks like a confirmed bug:]
      // https://github.com/Automattic/mongoose/issues/5455
      // console.log(req.params.id);
      res.status(200).json(ticket);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //delete ticket
  deletetTicket: async (req, res) => {
    TicketModel.findOneAndDelete(req.params.id)
      .then(() => {
        res.status(200).json("Ticket has been deleted");
      })
      .catch((err) => {
        res.status(404).json({ msg: "delete failed" });
      });
  },

  //get a user

  getATicket: async (req, res) => {
    // ticket details content only the ticket creater can view it
    // verifiy the user login, then go to the ticket id
    console.log(req.params.id);
    await TicketModel.findById(req.params.id, (err, docs) => {
      if (err) {
        res.status(404).json({ msg: "no ticket details found" });
      } else {
        // console.log("Result : ", docs);
        res.status(200).json(docs);
      }
    })
    
     
  },

  // get all ticket
  getAuserAllTicket: async (req, res) => {
    // console.log(req.user.id);
    const data = await TicketModel.find({ user: req.user.id }, (err, res) => {
      if (err) {
        // res.status(403).json({ msg: "no user found" });
        console.log(err);
      }
      // res.status(200).json(res);
      console.log("data fetch succsssfully");
    });

    if (!data) {
      res.status(403).json({ msg: "no user found" });
    }
    res.status(200).json(data);
  },
};
