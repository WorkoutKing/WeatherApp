import moment from "moment";

const currentMoment = moment().subtract(1, 'days');
const endMoment = moment().add(-3, 'days');
while (currentMoment.isBefore(endMoment, '7')) {
  console.log(`${currentMoment.format('llll')}`);
  (currentMoment.add(1, 'days'))
}
export default currentMoment


