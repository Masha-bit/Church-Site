import baptism from '/public/sacrament/baptism.jpg'
import confirmation from '/public/sacrament/confirmation.jpg'
import reconcilation from '/public/sacrament/reconciliation.jpg'
import eucharist from '/public/sacrament/eucharist.jpg'
import annointing from '/public/sacrament/anointing.png'
import funeral  from '/public/sacrament/funeral.jpg'
import marriage from '/public/sacrament/marriage.jpg'

const sacramentDescription = {
    sacrament: [
      {
        name: 'Baptism',
        url: baptism,
        description: `Through the Sacrament of Baptism, we are freed from sin and reborn as children of God. We become members of Christ, are incorporated into the Church, and made sharers in the Church’s mission. Through the waters of Baptism, sin is forgiven and the new Christian, having died with Christ, rises to new and everlasting life.`
      },
      {
        name: 'Reconcilation',
        url: reconcilation,
        description: `The Sacrament of Reconciliation is an experience of God’s forgiving love that not only absolves us from past failures but, more importantly, provides God an opportunity to gift us with grace to make better choices in our future. This sacrament also provides an individual with an opportunity, in absolute confidentiality, to discuss particular areas of personal concern with a priest.`
      },
      {
        name: 'Holy Eucharist',
        url: eucharist,
        description: `Jesus was a genius! He not only taught us that love of God and neighbor are equally important, he gave us a revolutionary way to combine the two. He made the universal sign of human friendship and love – a meal together – the sign as well of our love for God.`
      },
      {
        name: 'Annointing of the Sick',
        url: annointing,
        description: `The focus here is on the possibility of a spiritual or physical healing but other aspects of the person’s health also are considered. Many times, the spiritual healing is far more dramatic than the physical healing, and sometimes there is an increased ability to accept the physical illness and its suffering.`
      },
      {
        name: 'Funerals',
        url: funeral,
        description: `The focus here is on the possibility of a spiritual or physical healing but other aspects of the person’s health also are considered. Many times, the spiritual healing is far more dramatic than the physical healing, and sometimes there is an increased ability to accept the physical illness and its suffering.`
      },
      {
        name: 'Confirmation',
        url: confirmation,
        description: `The Roman Catholic Church views confirmation as a sacrament instituted by Jesus Christ. It confers the gifts of the Holy Spirit (wisdom, understanding, knowledge, counsel, fortitude, piety, and fear of the Lord) upon the recipient, who must be a baptized person at least seven years old.`
      },
      {
        name: 'Marriage',
        url: marriage,
        description: `Jesus was a genius! He not only taught us that love of God and neighbor are equally important, he gave us a revolutionary way to combine the two. He made the universal sign of human friendship and love – a meal together – the sign as well of our love for God.`
      },
    ]
}

export default sacramentDescription
