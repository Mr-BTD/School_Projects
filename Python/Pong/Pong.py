
from ensurepip import version
import turtle

WIN = turtle.Screen()
WIN.title("Pong")
WIN.bgcolor("black")
WIN.setup(width=800, height=600)
WIN.tracer(0)


# Paddle A

paddleA = turtle.Turtle()
paddleA.speed(0)
paddleA.shape("square")
paddleA.color("white")
paddleA.shapesize(stretch_wid=5, stretch_len=1)
paddleA.penup()
paddleA.goto(-350, 0)

# Paddle B

paddleB = turtle.Turtle()
paddleB.speed(0)
paddleB.shape("square")
paddleB.color("white")
paddleB.shapesize(stretch_wid=5, stretch_len=1)
paddleB.penup()
paddleB.goto(350, 0)

# Ball

ball = turtle.Turtle()
ball.speed(0)
ball.shape("square")
ball.color("white")
ball.penup()
ball.goto(0, 0)

# Function


def paddleAup():
    y = paddleA.ycor()
    y += 20
    paddleA.ycor(y)


def paddleAdown():
    y = paddleA.ycor()
    y -= 20
    paddleA.ycor(y)


# Keyboard binding
WIN.listen()
WIN.onkeypress(paddleAup, "w")
WIN.onkeypress(paddleAdown, "s")

# Mian Game Loop


while True:
    WIN.update()
