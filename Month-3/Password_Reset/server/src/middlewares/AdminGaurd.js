export const AdminGuard = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Access Denied. Only admin allowed',
    })
  }
  next()
}
