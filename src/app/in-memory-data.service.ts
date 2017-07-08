import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const discoveries = [
      { id: 0,  name: 'Apple’s HomePod: Threading a Needle', author: 'Anthony Bardaro', description: 'Apple is charting a brilliant strategic path with its HomePod release: they’re positioning it as a premium product, with superior specs, that uses music as its defining value proposition. But, despite the marketing department’s best laid plans, analyzing HomePod’s fate requires an understanding of the uphill battle Apple has ahead.' },
      { id: 11, name: 'Under the Hood of a Self-Driving Taxi', author: 'Oliver Cameron', description: 'A self-driving car traditionally follows the paradigm of Sense, Plan, Act. The car senses the environment around it, utilizing sensors like LIDAR, radar and cameras. The car plans the path from point A to point B, using sensor information and other contextual information. The car then acts, executing the path that was planned by controlling its steering and speed. To give a car the ability to Sense, Plan & Act (SPA) requires a complex system of hardware and software, all of which works together in (hopeful) harmony to form a self-driving car. You might be familiar with some of the surface level components in isolation (things like cameras, LIDAR etc.), but equally important is all the plumbing necessary to make them all sing together. It’s that plumbing, or the core, that we’ll cover in this post.' },
      { id: 12, name: 'Selling the World, Virtually', author: 'Wren Handman', description: 'Spatial computing is beginning the slow crawl to maturity. As the technology develops into something simultaneously more complex and also more stable, new areas of possibility open and grow. Since the beginning, avid enthusiasts have seen hope of a reformation of the real estate industry with the help of spatial computing, but it’s only now that real solutions are starting to be feasible.' },
      { id: 13, name: 'Toy Story lessons for the Internet of Things', author: 'Dan Gärdenfors', description: 'Digital products send notifications to be noticed. For example, red dots constantly appear on our mobile home screens calling for our attention. We might find it annoying, however it makes perfect sense from each individual app’s perspective. If notifications make us open an app, there’s always the chance that we upgrade to premium or spend money on in-app purchases.' },
      { id: 14, name: 'Crime-Tracking? There’s an App for That.' },
      { id: 15, name: 'The 10 Virtual Reality artists you need to see to believe' },
      { id: 16, name: 'Embracing Read Receipts' },
      { id: 17, name: 'Creating the right products for VR, AR, or MR' },
      { id: 18, name: 'Why Bot Makers Dream of Electric Sheep' },
      { id: 19, name: 'How Does the Internet Work?' },
      { id: 20, name: 'Tech and Elitist Design' },
      { id: 21, name: 'Five Advantages of Serverless Technology' }
    ];
    return {discoveries};
  }
}
