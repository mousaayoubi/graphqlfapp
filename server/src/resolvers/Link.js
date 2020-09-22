function postedBy(parent, args, context) {
  return context.prisma.link({ id: parent.id }).postedBy()
}

function votes(parent, args, context) {
  return context.prisma.link({ id: parent.id }).votes()
}

module.exports = {
  postedBy,
  votes,
<<<<<<< HEAD
}
=======
}
>>>>>>> 24d953ea884b56c532324db1dc40c94ff58dee27
