import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>DotTeckStar</h1>
          <p>Solution to all your problems.</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            commodi, autem neque alias fuga accusantium necessitatibus illo?
            Aspernatur perspiciatis officia voluptas! Aliquam cumque porro id
            vel magnam aliquid eum non? Asperiores repudiandae vero distinctio
            adipisci suscipit nobis architecto molestiae mollitia! Accusamus
            inventore quia reprehenderit dolores eius adipisci totam sequi
            voluptatum perferendis, laboriosam delectus numquam, voluptatibus
            magnam nihil, voluptates optio rem! Ipsa ab repellat, dignissimos
            assumenda quasi labore iure porro asperiores amet corporis alias,
            iusto ipsum aliquid aut quae placeat architecto dolor eligendi? Ea
            obcaecati nobis iusto quae nihil quidem laborum!
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brand</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
