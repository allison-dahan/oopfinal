file structure:

- data.json

- Map.ts

- index.ts -> call methods that print map and reports

  - printMap(). The method should do as follows:
  - Generate an ASCII-representation of the map data for each city:

    The "H" symbols on the map represent Households that still have some members unvaccinated.

    The "F" symbols on the map represent Households that have all members vaccinated.

    The "C" symbols on the map represent Clinics.

    After they have been added to the queue, there are a few things you should ensure:

    Their isVaccinated status has been set to true

    if they were the last person in their household which needed to get vaccinated, that means their household is now fully vaccinated. Calling printMap() again should now show their household as "F" instead of "H".

- Household.ts
  A Household resides within a city, and have people living in it. It also contains a block number, which represents where that household resides on a block.

- People.ts
  A unique personal health number (string)

    A full name (string)

A vaccination status (true means they are already vaccinated, false means they are not).

An age (number)

- Clinic.ts
A name (string)

Number of Staff (An integer representing the number of working nursing staff). 

A block number which represents where the clinic resides on the block.

- Queue.ts

This is a queue data structure. In other words, the first person inserted into the queue will be the first person in line to get their COVID shot. 
at minimum:   
  enqueue(person) Add a person to the queue
  dequeue(); Remove a person from the queue
  size() Check the number of people in the queue
  A getCurrentWaitTime method, which returns a number in minutes representing how long the average wait is for that clinic's queue. Wait time is calculated by the following:

- Your program must contain a variable called currentIntake, which will contain a minimum bound for the age you must be to get your shot. 

# oopfinal
# oopfinal
# oopfinal
