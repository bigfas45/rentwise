import { Plan } from '../plan';
it('implements optimistic concurrency control', async done => {
  // Create an instance of a ticket
  const title = 'cshssjh';
  const description = 'jndjndejndjed';
  const returnPercentage = 5;
  const minDuration = 3;
  const ticket = Plan.build({
    title,
    description,
    returnPercentage,
    minDuration,
    userId: "asdfghj"
  });

  // save the ticket to the database
  await ticket.save();

  // fetch the ticket twice

  const firstInstance = await Plan.findById(ticket.id);
  const secondInstance = await Plan.findById(ticket.id);

  // make two separate change to the ticktes we fetched
  firstInstance!.set({ returnPercentage: 10 });
  secondInstance!.set({ returnPercentage: 10 });

  // save the first fetched ticket
  await firstInstance!.save();

  // save the second fetched ticket and expect an error
  try {
    await secondInstance!.save();
  } catch (err) {
    return done();
  }

  throw new Error('Should not reach this point');
});

it('increments the version number on multiple saves', async () => {
  const title = 'cshssjh';
  const description = 'jndjndejndjed';
  const returnPercentage = 5;
  const minDuration = 3;
  const ticket = Plan.build({
    title,
    description,
    returnPercentage,
    minDuration,
    userId: 'cfghjk'
  });

  await ticket.save();
  expect(ticket.version).toEqual(0);

  await ticket.save();
  expect(ticket.version).toEqual(1);

  await ticket.save();
  expect(ticket.version).toEqual(2);
});
